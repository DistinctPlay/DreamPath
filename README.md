# DreamPath - Next.js + Firebase Starter

This is a starter Next.js project pre-wired for Firebase Google Sign-In and Firestore member tracking. It uses Tailwind for styling.

## Quick start

1. `npm install`
2. Create a Firebase project and enable Google Sign-In. Add Firestore database (in production mode or test mode).
3. Create a `.env.local` file with these vars:

```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

4. `npm run dev` to run locally.
5. Deploy to Vercel by connecting your GitHub repo and adding the same env vars in the Vercel dashboard.

Notes:
- The app will create a `members` document for each signed-in user in Firestore.
- Public dashboard reads member count using Firestore count API.
