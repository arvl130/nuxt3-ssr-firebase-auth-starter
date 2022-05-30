import admin from "firebase-admin"
import serviceAccount from "../secret-key.json"

export const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

export const auth = admin.auth()
