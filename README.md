# Nuxt 3 SSR Firebase Auth Starter

## Overview

- This project enables Firebase client-side Authentication to work with
  Nuxt 3's default server-side rendering (SSR) mode.

- It builds on top of wobsoriano's
  [Nuxt 3 SSR Firebase Auth starter](https://github.com/wobsoriano/nuxt-firebase-auth-starter)
  to fix a synchronization issue:

  - Entering protected routes with expired Firebase ID tokens or expired cookies causes the app to
    redirect us to the login page. However, on the next refresh, we will be logged in once again.

  - To fix the issue, we use a token expired page to refresh our Firebase ID tokens when they expire.

  - For expired cookies, we run `signOut` on the Login page mount to make sure we are really logged out,
    once redirected to that page.

- This starter template is for web apps using Cloud Firestore. Look into the original project, if you
  are working with Firebase Realtime database.

- I have not implemented an example protected route with this template. Look into the original project
  for an example on how to do that.

## How to Use

- Create a Firebase project: [console.firebase.google.com](https://console.firebase.google.com/)
- Under Authentication -> Sign-in method -> Sign-in providers, add Email/Password provider.
- Under Authentication -> Users, add a new user.
- In Project Overview, create a new web app for your project.
- Copy the credentials to `firebase/client.js`.
- In Project Overview -> Service accounts, Generate a new private key.
- Copy the generated key file it to the root of the project folder.
- Rename the private key JSON to secret-key.json.
- If done correctly, you should be able to run `npm run dev`, and log in with protected routes
  enabled.
