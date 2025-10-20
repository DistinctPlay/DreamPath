import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../lib/firebase";

export default function APPage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/");
      else setLoading(false);
    });
    return unsubscribe;
  }, [auth, router]);

  if (loading)
    return <p className="text-center mt-10 text-gray-400">Loading...</p>;

  const apTiers = [
    {
      tier: "S Tier — Most Difficult",
      color: "bg-red-500",
      text: "text-white",
      items: [
        "AP Physics C: Mechanics",
        "AP Physics C: Electricity & Magnetism",
        "AP Chemistry",
        "AP Calculus BC",
        "AP Latin",
        "AP Chinese Language and Culture",
      ],
    },
    {
      tier: "A Tier — Challenging",
      color: "bg-orange-500",
      text: "text-white",
      items: [
        "AP Biology",
        "AP Statistics",
        "AP Calculus AB",
        "AP Physics 1",
        "AP Literature",
        "AP U.S. History",
      ],
    },
    {
      tier: "B Tier — Moderately Difficult",
      color: "bg-yellow-400",
      text: "text-black",
      items: [
        "AP World History",
        "AP Environmental Science",
        "AP Psychology",
        "AP Spanish Language and Culture",
        "AP Computer Science A",
      ],
    },
    {
      tier: "C Tier — Accessible",
      color: "bg-green-400",
      text: "text-black",
      items: [
        "AP Human Geography",
        "AP U.S. Government & Politics",
        "AP Microeconomics",
        "AP Macroeconomics",
        "AP Computer Science Principles",
      ],
    },
    {
      tier: "D Tier — Introductory",
      color: "bg-blue-400",
      text: "text-white",
      items: ["AP Art History", "AP Music Theory", "AP Seminar", "AP Research"],
    },
  ];

  const careers = [
    {
      career: "💻 Software Developer",
      color: "bg-purple-200",
      recommended: [
        "AP Computer Science A",
        "AP Calculus AB/BC",
        "AP Statistics",
        "AP Physics 1",
      ],
    },
    {
      career: "💼 Financial Analyst",
      color: "bg-green-200",
      recommended: [
        "AP Economics (Micro & Macro)",
        "AP Statistics",
        "AP Calculus AB",
        "AP U.S. Government & Politics",
      ],
    },
    {
      career: "🧬 Doctor / Biomedical Researcher",
      color: "bg-blue-200",
      recommended: [
        "AP Biology",
        "AP Chemistry",
        "AP Calculus AB",
        "AP Psychology",
      ],
    },
    {
      career: "⚖️ Law / Political Science",
      color: "bg-yellow-200",
      recommended: [
        "AP U.S. History",
        "AP U.S. Government & Politics",
        "AP English Literature",
        "AP Seminar",
      ],
    },
    {
      career: "⚙️ Engineer",
      color: "bg-red-200",
      recommended: [
        "AP Physics C: Mechanics",
        "AP Calculus BC",
        "AP Computer Science A",
        "AP Chemistry",
      ],
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center px-6 py-16 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        AP Tier List
      </h1>
      <p className="text-gray-300 text-center max-w-3xl mb-12 text-lg leading-relaxed">
        A guide to understanding which APs are the hardest and which align best
        with your career goals. Difficulty may vary by teacher and school.
      </p>

      {/* AP Tiers */}
      <div className="flex flex-col w-full max-w-6xl gap-6 mb-16">
        {apTiers.map((tier, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-2xl overflow-hidden ${tier.color} ${tier.text} p-6 transition transform hover:scale-[1.02]`}
          >
            <h3 className="text-2xl font-bold mb-4">{tier.tier}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-base font-medium">
              {tier.items.map((item, i) => (
                <li
                  key={i}
                  className="bg-white/20 rounded-lg p-3 shadow-inner hover:bg-white/30 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Career Recommendations */}
      <h2 className="text-3xl font-bold mb-6 text-center text-cyan-300">
        Career-Based AP Recommendations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl mb-20">
        {careers.map((career, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 shadow-lg ${career.color} text-gray-900 hover:scale-[1.03] transition`}
          >
            <h3 className="text-xl font-semibold mb-3">{career.career}</h3>
            <ul className="list-disc list-inside text-base font-medium">
              {career.recommended.map((ap, j) => (
                <li key={j}>{ap}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
