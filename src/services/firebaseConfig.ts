import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRE_BASE_KEY,
    authDomain: process.env.REACT_APP_FIRE_BASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIRE_BASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIRE_BASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIRE_BASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIRE_BASE_APP_ID,
    measurementId: process.env.REACT_APP_FIRE_BASE_MEASURMENT_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore()
export { db }
export const storage = getStorage(app)
export const auth = getAuth(app)
