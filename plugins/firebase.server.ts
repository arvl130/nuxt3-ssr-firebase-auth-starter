import { auth } from "../firebase/admin"
import useCurrentUser from "~~/components/useCurrentUser"
import useTokenExpiryStatus from "~~/components/useTokenExpiryStatus"

export default defineNuxtPlugin(async () => {
  const fbToken = useCookie("fb-token")
  const currUser = useCurrentUser()
  const tokenExpired = useTokenExpiryStatus()

  if (!fbToken.value) return

  try {
    const foundUser = await auth.verifyIdToken(fbToken.value)
    currUser.value = {
      uid: foundUser.uid,
      email: foundUser.email,
    }
  } catch (e) {
    switch (e.code) {
      case "auth/id-token-expired":
        tokenExpired.value = true
        console.log("Token expired")
        break
      default:
        console.log("Error while verifying token:", e.message)
    }
  }
})
