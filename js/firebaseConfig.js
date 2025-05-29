// Importa le funzionalità necessarie da Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js";

// La configurazione di Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDAs-B2Jk6PvQTb_S_bYfAiTDaQHnSF2EQ",
  authDomain: "repartapp-3f1a4.firebaseapp.com",
  projectId: "repartapp-3f1a4",
  storageBucket: "repartapp-3f1a4.firebasestorage.app",
  messagingSenderId: "1025798533836",
  appId: "1:1025798533836:web:c046ef07edf3669e7b8869"
};

// Inizializza Firebase
export const app = initializeApp(firebaseConfig); 