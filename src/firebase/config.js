import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Importa getFirestore
// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBTHiSZoO70essS_yPXEiPB4Lh45O4i9oA",
    authDomain: "jotashop-b4d74.firebaseapp.com",
    projectId: "jotashop-b4d74",
    storageBucket: "jotashop-b4d74.firebasestorage.app",
    messagingSenderId: "1096016592803",
    appId: "1:1096016592803:web:5164967c1bc1bebad4a416"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
// Asegúrate de obtener correctamente la instancia de Firestore
const db = getFirestore(app);
export { db };