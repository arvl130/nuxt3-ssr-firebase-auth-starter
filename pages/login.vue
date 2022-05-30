<script setup>
import { signInWithEmailAndPassword, signOut } from "firebase/auth"

const { $firebaseAuth: auth } = useNuxtApp()
const userCredentials = reactive({
  email: "juandelacruz@example.com",
  password: "password123",
})
const buttonIsDisabled = ref(false)

const router = useRouter()
const signIn = async () => {
  buttonIsDisabled.value = true
  try {
    await signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
    router.push("/")
  } catch (e) {
    console.log("FirebaseError:", e.message)
  }
  buttonIsDisabled.value = false
}

onMounted(async () => {
  await signOut(auth)
})
</script>

<template>
  <div class="bg-gray-200 pt-24">
    <div class="max-w-[24rem] mx-auto bg-white px-6 py-4 rounded-lg shadow-lg">
      <div class="text-center text-3xl font-semibold mb-3">Login Page</div>
      <div class="text-lg">
        <div class="mb-3">
          <div class="mb-2">Email</div>
          <div>
            <input
              v-model="userCredentials.email"
              type="text"
              class="w-full px-4 py-2 rounded-lg border border-gray-200"
            />
          </div>
        </div>
        <div class="mb-6">
          <div class="mb-2">Password</div>
          <div>
            <input
              v-model="userCredentials.password"
              type="password"
              class="w-full px-4 py-2 rounded-lg border border-gray-200"
            />
          </div>
        </div>
        <div class="mb-3">
          <button
            type="button"
            class="w-full bg-blue-600 hover:bg-blue-500 transition duration-200 tracking-wide text-white font-medium py-2 px-3 rounded-md"
            :disabled="buttonIsDisabled"
            @click="signIn()"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
