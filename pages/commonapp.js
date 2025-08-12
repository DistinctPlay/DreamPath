import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../lib/firebase";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CommonApp(){
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/"); // Redirect to home if not signed in
      } else {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, [auth, router]);

  if (loading) {
    return <p className="text-center mt-10 text-gray-300">Loading...</p>;
  }

  return (
    <section className="flex flex-col items-center justify-center flex-grow text-center px-4 gap-8 min-h-screen">
      <h2 className="text-2xl font-bold">Common App Guide</h2>
      <p className="text-slate-700">Embed your private YouTube videos here. Replace iframe src with your video IDs.</p>
    </section>
  )
}
