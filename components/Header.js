import Link from 'next/link';
import { useEffect, useState } from 'react';
import { app } from '../lib/firebase';
import { getAuth, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Menu, X } from "lucide-react"; // icons for hamburger & close

export default function Header() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <header className="bg-gradient-to-r from-black via-gray-900 to-[#3B82F6] shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-12 w-12" />
          <span className="text-2xl font-bold text-white">RiseTogether</span>
        </Link>

        {/* Hamburger menu button (mobile only) */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row gap-4 md:gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 z-50`}
        >
          {user && (
            <>
              <Link href="/ap" className="text-white hover:text-[#3B82F6]">AP</Link>
              <Link href="/extracurriculars" className="text-white hover:text-[#3B82F6]">Extracurriculars</Link>
              <Link href="/interviews" className="text-white hover:text-[#3B82F6]">Interviews</Link>
            </>
          )}
          {!user ? (
            <button onClick={handleSignIn} className="bg-[#3B82F6] text-white px-3 py-1 rounded-lg hover:bg-blue-600">
              Sign In
            </button>
          ) : (
            <button onClick={handleSignOut} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
              Sign Out
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
