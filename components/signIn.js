import { getAuth, signInWithEmailAndPassword } from "@firebase/auth"

const auth = getAuth()
export default async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
}
