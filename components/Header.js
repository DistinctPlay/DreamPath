import Link from 'next/link';
import { useEffect, useState } from 'react'
import { app, auth, signInWithGoogle, signOutUser } from '../lib/firebase'
import { getAuth, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Header() {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, [auth]);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-[#3B82F6] shadow-lg ">
      <div className="container mx-auto flex justify-around items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <img src="/logo.png" alt="Logo" className="h-20 w-20 min-w-10" />
            <span className="text-3xl font-bold text-white ">DreamPath</span>
          </div>
        </Link>
        <nav className="flex items-center gap-x-6">
          <Link href="/dashboard" className="hover:text-[#3B82F6]">Dashboard</Link>
           {user && (
          <>
            <Link href="/ap">AP</Link>
            <Link href="/commonapp">Common App</Link>
            <Link href="/extracurriculars">Extracurriculars</Link>
            <Link href="/scholarships">Scholarships</Link>
            <Link href="/testing">SAT & ACT</Link>
          </>
        )}
        {!user ? (
          <button onClick={handleSignIn} className="btn">Sign In</button>
        ) : (
          <button onClick={handleSignOut} className="btn">Sign Out</button>
        )}
        </nav>
      </div>
    </header>
  );
}
