<script setup>
import useCurrentUser from "~~/components/useCurrentUser"

const user = useCurrentUser()
const { $firebaseAuth: auth } = useNuxtApp()

const router = useRouter()
const logout = async () => {
  await auth.signOut()
  router.push("/login")
}
</script>

<template>
  <div class="bg-gray-200 pt-16 px-6">
    <div
      v-if="user"
      class="max-w-md mx-auto rounded-lg bg-white px-5 py-4 shadow-lg grid"
    >
      <!-- Greetings -->
      <div class="text-center text-2xl mb-3 overflow-hidden text-ellipsis">
        Welcome, <span class="font-bold">{{ user.email }}</span
        >!
      </div>
      <!-- Logout -->
      <div class="text-center">
        <button
          type="button"
          class="bg-blue-600 hover:bg-blue-500 transition duration-200 tracking-wide text-white font-medium py-2 px-3 rounded-md"
          @click="logout()"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>
