# Nuxt 3 SSR Firebase Auth Starter using ID Tokens

- This project is a starter template for Nuxt 3 projects using Firebase Authentication.
  It uses [ID tokens](https://firebase.google.com/docs/auth/admin/manage-sessions)
  provided by Firebase which are then saved as cookies to handle authentication and route
  protection.

- It builds on top of wobsoriano's
  [Nuxt 3 SSR Firebase Auth starter](https://github.com/wobsoriano/nuxt-firebase-auth-starter)
  to fix a synchronization issue:

  - Entering protected routes with expired Firebase ID tokens or expired cookies causes the app to
    redirect us to the login page. However, on the next refresh, we will be logged in once again.

  - To fix the issue, we use a token expired page to let ID tokens refresh when they expire.

  - For expired cookies, we run `signOut` on the Login page mount to make sure we are really logged out,
    once we reach that page.

- I have not implemented protected api routes with this template. Look into the original project
  for an example on how to do that.

- This method of using Firebase Auth with server-side rendered apps is more of a hack.
  Instead, it is recommend to use
  [session cookies](https://github.com/arvl130/nuxt3-ssr-firebase-auth-session-cookies-starter)
  provided by Firebase.

## Setup

1. Create a Firebase project: [console.firebase.google.com](https://console.firebase.google.com/)
2. Register a new Web app and copy the configuration to `firebase/client.js`.
3. Generate a new service account key and save it as `secret-key.json` in the project root directory.
4. Enable Email/Password provider under Authentication -> Sign-in method.
5. Add a new user.
6. Start the project with the following command:

```sh
npm run dev
```
