import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../lib/firebase";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function APs(){
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

  import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../lib/firebase";

export default function APs() {
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

  // 🔹 AP Tier List
  const tiers = {
    "S Tier (Hardest)": [
      "AP Physics C: Mechanics",
      "AP Physics C: Electricity & Magnetism",
      "AP Chemistry",
      "AP Calculus BC"
    ],
    "A Tier": [
      "AP Biology",
      "AP U.S. History",
      "AP English Literature & Composition",
      "AP Calculus AB",
      "AP Computer Science A",
      "AP World History: Modern"
    ],
    "B Tier": [
      "AP Psychology",
      "AP Statistics",
      "AP Macroeconomics",
      "AP Microeconomics",
      "AP Government & Politics: U.S.",
      "AP English Language & Composition",
      "AP European History",
      "AP Environmental Science"
    ],
    "C Tier (Easiest)": [
      "AP Human Geography",
      "AP Seminar",
      "AP Research",
      "AP Art & Design (2D, 3D, Drawing)",
      "AP Music Theory"
    ]
  };

  // 🔹 Careers and Recommended APs
  const careers = {
    "Software Developer / Engineer": [
      "AP Computer Science A",
      "AP Computer Science Principles",
      "AP Calculus AB/BC",
      "AP Statistics",
      "AP Physics C"
    ],
    "Doctor / Medical Field": [
      "AP Biology",
      "AP Chemistry",
      "AP Psychology",
      "AP Statistics",
      "AP Calculus AB/BC"
    ],
    "Lawyer / Political Science": [
      "AP Government & Politics: U.S.",
      "AP U.S. History",
      "AP World History",
      "AP English Literature & Composition",
      "AP English Language & Composition"
    ],
    "Business / Finance": [
      "AP Macroeconomics",
      "AP Microeconomics",
      "AP Statistics",
      "AP Calculus AB",
      "AP Psychology"
    ],
    "Engineer (Mechanical, Civil, Electrical)": [
      "AP Physics C",
      "AP Calculus BC",
      "AP Chemistry",
      "AP Computer Science A"
    ],
    "Artist / Designer / Musician": [
      "AP Art & Design (2D, 3D, Drawing)",
      "AP Music Theory",
      "AP English Language & Composition",
      "AP Seminar"
    ]
  };

  return (
    <section className="flex flex-col items-center justify-center flex-grow text-center px-4 gap-8 min-h-screen">
      <h2 className="text-2xl font-bold">AP Rankings & Career Recommendations</h2>
      <p className="text-slate-400">
        Explore AP courses ranked by difficulty and see which ones align with your career pathway.
      </p>

      {/* 🔹 Tier List */}
      <div className="w-full max-w-3xl text-left">
        <h3 className="text-xl font-bold mb-4 text-indigo-400">AP Tier List</h3>
        {Object.entries(tiers).map(([tier, subjects]) => (
          <div key={tier} className="mb-6">
            <h4 className="text-lg font-semibold text-indigo-500">{tier}</h4>
            <ul className="list-disc list-inside pl-4 text-gray-300">
              {subjects.map((ap) => (
                <li key={ap}>{ap}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 🔹 Career Recommendations */}
      <div className="w-full max-w-3xl text-left">
        <h3 className="text-xl font-bold mb-4 text-green-400">Career Pathways & Recommended APs</h3>
        {Object.entries(careers).map(([career, aps]) => (
          <div key={career} className="mb-6">
            <h4 className="text-lg font-semibold text-green-500">{career}</h4>
            <ul className="list-disc list-inside pl-4 text-gray-300">
              {aps.map((ap) => (
                <li key={ap}>{ap}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}