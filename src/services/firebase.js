import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKGNQoZPeQx47WU0C8U_aZlemukhyAeC8",
    authDomain: "crypto-app-33a0c.firebaseapp.com",
    projectId: "crypto-app-33a0c",
    storageBucket: "crypto-app-33a0c.appspot.com",
    messagingSenderId: "925631193873",
    appId: "1:925631193873:web:c75bf16d7adbeb2eec22b0"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;