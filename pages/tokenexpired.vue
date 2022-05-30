<script setup>
import useTokenExpiryStatus from "~~/components/useTokenExpiryStatus"

const { $firebaseAuth: auth } = useNuxtApp()
const tokenExpired = useTokenExpiryStatus

const router = useRouter()
const route = useRoute()

const setServerSession = (token) => {
  return $fetch("/api/session", {
    method: "POST",
    body: {
      token,
    },
  })
}

onMounted(() => {
  auth.onIdTokenChanged(async (user) => {
    if (user) {
      const redirectUrl = route.query.redirectUrl
      const token = await user.getIdToken()
      setServerSession(token)
      tokenExpired.value = false
      if (redirectUrl) router.push(redirectUrl)
      else router.push("/")
    }
  })
})
</script>

<template>
  <div>Token expired. Waiting for new token...</div>
</template>
