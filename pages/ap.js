import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../lib/firebase";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    return <p className="text-center mt-10 text-gray-300">Loading...</p>;

  const apTiers = [
    {
      tier: "S Tier (Most Difficult)",
      color: "bg-red-300",
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
      tier: "A Tier (Challenging)",
      color: "bg-orange-200",
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
      tier: "B Tier (Moderately Difficult)",
      color: "bg-yellow-200",
      items: [
        "AP World History",
        "AP Environmental Science",
        "AP Psychology",
        "AP Spanish Language and Culture",
        "AP Computer Science A",
      ],
    },
    {
      tier: "C Tier (Accessible)",
      color: "bg-green-200",
      items: [
        "AP Human Geography",
        "AP U.S. Government & Politics",
        "AP Microeconomics",
        "AP Macroeconomics",
        "AP Computer Science Principles",
      ],
    },
    {
      tier: "D Tier (Introductory)",
      color: "bg-blue-200",
      items: [
        "AP Art History",
        "AP Music Theory",
        "AP Seminar",
        "AP Research",
      ],
    },
  ];

  const careers = [
    {
      career: "Software Developer",
      recommended: [
        "AP Computer Science A",
        "AP Calculus AB/BC",
        "AP Statistics",
        "AP Physics 1",
      ],
    },
    {
      career: "Financial Analyst",
      recommended: [
        "AP Economics (Micro & Macro)",
        "AP Statistics",
        "AP Calculus AB",
        "AP U.S. Government & Politics",
      ],
    },
    {
      career: "Doctor / Biomedical Researcher",
      recommended: [
        "AP Biology",
        "AP Chemistry",
        "AP Calculus AB",
        "AP Psychology",
      ],
    },
    {
      career: "Law / Political Science",
      recommended: [
        "AP U.S. History",
        "AP U.S. Government & Politics",
        "AP English Literature",
        "AP Seminar",
      ],
    },
    {
      career: "Engineer",
      recommended: [
        "AP Physics C: Mechanics",
        "AP Calculus BC",
        "AP Computer Science A",
        "AP Chemistry",
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow px-4 py-10 min-h-screen">
        <h2 className="text-3xl font-bold mb-4 text-center">AP Tier List</h2>
        <p className="text-slate-700 text-center max-w-3xl mb-8">
          AP courses ranked by general difficulty and college-level rigor.
          Difficulty may vary by school and teacher, but this serves as a helpful guide.
        </p>

        <div className="flex flex-col w-full max-w-5xl gap-3 mb-12">
          {apTiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-md overflow-hidden ${tier.color} p-4`}
            >
              <h3 className="font-bold text-lg mb-2">{tier.tier}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-800">
                {tier.items.map((item, i) => (
                  <li key={i} className="bg-white/50 rounded-md p-2 shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Career-Based AP Recommendations
        </h2>
        <div className="flex flex-col w-full max-w-4xl gap-3">
          {careers.map((career, i) => (
            <div key={i} className="bg-gray-100 rounded-xl shadow p-4">
              <h3 className="font-semibold mb-2">{career.career}</h3>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {career.recommended.map((ap, j) => (
                  <li key={j}>{ap}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
