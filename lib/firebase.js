import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { getFirestore, doc, setDoc, serverTimestamp, collection, getCountFromServer } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

export async function signInWithGoogle(){
  const res = await signInWithPopup(auth, provider)
  const user = res.user
  try{
    const userRef = doc(db, 'members', user.uid)
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName || '',
      email: user.email || '',
      photoURL: user.photoURL || '',
      createdAt: serverTimestamp()
    }, { merge: true })
  }catch(e){ console.error('firestore write error', e) }
}

export function signOutUser(){ return signOut(auth) }

export async function getMemberCount(){
  try{
    const coll = collection(db, 'members')
    const snapshot = await getCountFromServer(coll)
    return snapshot.data().count
  }catch(e){ console.error(e); return null }
}
