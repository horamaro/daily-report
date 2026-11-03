import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { fetchHistoryData} from "./my-modules/fetchHistoryData";
import { submitData} from "./my-modules/submit-data";


// 設定条件
const firebaseConfig = {
  apiKey: "AIzaSyBHrNKqS2UWMcPuot6EeoIx3DLnUdrbNXs",
  authDomain: "dairy-report-b3c21.firebaseapp.com",
  projectId: "dairy-report-b3c21",
  storageBucket: "dairy-report-b3c21.firebasestorage.app",
  messagingSenderId: "928947499657",
  appId: "1:928947499657:web:b9315fed24b23bd4674c58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//cloud firestoreの初期化
const db = getFirestore(app);

//cloud firestoreから取得したデータを表示する
  if (document.getElementById("js-history")) {
    fetchHistoryData(getDocs, collection, db);
  }


// Cloud Firestoreにデータを送信する
if (document.getElementById("js-form")) {
  document.getElementById("js-form").addEventListener("submit", (e) => submitData(e, addDoc, collection, db));
}