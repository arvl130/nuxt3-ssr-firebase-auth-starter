import { app, auth } from "../firebase/client"
import useCurrentUser from "~~/components/useCurrentUser"

const setServerSession = (token: string) => {
  return $fetch("/api/session", {
    method: "POST",
    body: {
      token,
    },
  })
}

export default defineNuxtPlugin((nuxtApp) => {
  const currUser = useCurrentUser()

  nuxtApp.hooks.hook("app:mounted", () => {
    auth.onIdTokenChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken()
        setServerSession(token)
        currUser.value = {
          uid: user.uid,
          email: user.email,
        }
      } else {
        setServerSession("")
        currUser.value = null
      }
    })
  })

  return {
    provide: {
      firebaseApp: app,
      firebaseAuth: auth,
    },
  }
})
