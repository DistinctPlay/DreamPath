import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../lib/firebase";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Extracurriculars() {
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

  const tiers = [
    {
      tier: "Platinum II",
      color: "bg-gradient-to-r from-indigo-500 to-purple-400 text-white",
      items: [
        "IMO Medalist",
        "IPhO/IChO/IBO Medalist",
        "Regeneron Top 10",
        "ISEF Grand Prize",
        "RSI",
        "Olympic Development Selection",
      ],
    },
    {
      tier: "Platinum I",
      color: "bg-gradient-to-r from-indigo-400 to-purple-300 text-white",
      items: [
        "RSI Finalist",
        "USACO Camp",
        "Broadcom MASTERS Winner",
        "YoungArts Grand Prize",
        "National Science Bowl Champion",
      ],
    },
    {
      tier: "Diamond II",
      color: "bg-gradient-to-r from-cyan-500 to-blue-400 text-white",
      items: [
        "Regeneron Top 300",
        "USAMO Qualifier",
        "MIT PRIMES",
        "Scholastic Gold Medal",
        "National History Day 'Best in Nation'",
      ],
    },
    {
      tier: "Diamond I",
      color: "bg-gradient-to-r from-cyan-400 to-blue-300 text-white",
      items: [
        "Science Olympiad Nationals",
        "YES Competition",
        "USAMTS Gold",
        "NSDA Nationals Breaker",
        "CyberPatriot National Finalist",
      ],
    },
    {
      tier: "Gold II",
      color: "bg-gradient-to-r from-yellow-500 to-orange-400 text-white",
      items: [
        "ISEF Finalist",
        "FBLA Nationals",
        "AMC 10 Perfect Score",
        "TSA Nationals",
        "HOSA ILC 1st Place",
      ],
    },
    {
      tier: "Gold I",
      color: "bg-gradient-to-r from-yellow-400 to-orange-300 text-white",
      items: [
        "USAAAO",
        "USNCO Semifinalist",
        "DECA ICDC Competitor",
        "Governor’s School",
        "Boys/Girls State",
      ],
    },
    {
      tier: "Silver II",
      color: "bg-gradient-to-r from-gray-400 to-gray-300 text-black",
      items: [
        "State Music Awards",
        "Science Fair State Winner",
        "Scholastic Silver Key",
        "Student Body President",
      ],
    },
    {
      tier: "Silver I",
      color: "bg-gradient-to-r from-gray-300 to-gray-200 text-black",
      items: [
        "Eagle Scout",
        "National Merit Finalist",
        "100+ Volunteer Hours",
        "Local Science Fair Winner",
      ],
    },
    {
      tier: "Bronze II",
      color: "bg-gradient-to-r from-amber-400 to-yellow-300 text-black",
      items: [
        "Club Founder/President",
        "Part-Time Job",
        "Local Fundraisers",
        "Essay Contest Winner",
      ],
    },
    {
      tier: "Bronze I",
      color: "bg-gradient-to-r from-amber-300 to-yellow-200 text-black",
      items: [
        "Club Member",
        "JV Sports",
        "Honor Roll",
        "Beta Club",
        "Light Volunteering",
      ],
    },
  ];

  return (
    <>
      <main className="flex flex-col items-center justify-center flex-grow px-4 py-12 min-h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-black">
        <h2 className="text-4xl font-extrabold mb-4 text-center text-white drop-shadow-lg">
          Extracurriculars — Tier List
        </h2>
        <p className="text-gray-200 text-center max-w-3xl mb-10 text-lg">
          Ranked from most common (Bronze I) to rarest (Platinum II).  
          Each tier reflects increasing levels of selectivity, recognition, and impact.
        </p>

        <div className="flex flex-col w-full max-w-6xl gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-xl overflow-hidden ${tier.color} p-6 transition-transform hover:scale-[1.02]`}
            >
              <h3 className="font-extrabold text-2xl mb-4 drop-shadow-md">{tier.tier}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-base">
                {tier.items.map((item, i) => (
                  <li
                    key={i}
                    className="bg-white/30 backdrop-blur-md rounded-lg p-3 shadow-md text-center font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
