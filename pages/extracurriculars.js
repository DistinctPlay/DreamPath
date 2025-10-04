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
      color: "bg-indigo-300",
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
      color: "bg-indigo-200",
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
      color: "bg-cyan-300",
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
      color: "bg-cyan-200",
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
      color: "bg-yellow-300",
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
      color: "bg-yellow-200",
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
      color: "bg-gray-300",
      items: [
        "State Music Awards",
        "Science Fair State Winner",
        "Scholastic Silver Key",
        "Student Body President",
      ],
    },
    {
      tier: "Silver I",
      color: "bg-gray-200",
      items: [
        "Eagle Scout",
        "National Merit Finalist",
        "100+ Volunteer Hours",
        "Local Science Fair Winner",
      ],
    },
    {
      tier: "Bronze II",
      color: "bg-amber-200",
      items: [
        "Club Founder/President",
        "Part-Time Job",
        "Local Fundraisers",
        "Essay Contest Winner",
      ],
    },
    {
      tier: "Bronze I",
      color: "bg-amber-100",
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
      <main className="flex flex-col items-center justify-center flex-grow px-4 py-10 min-h-screen">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Extracurriculars — Tier List
        </h2>
        <p className="text-slate-700 text-center max-w-3xl mb-8">
          Ranked from most common (Bronze I) to rarest (Platinum II).  
          Each tier reflects increasing levels of selectivity, recognition, and impact.
        </p>

        <div className="flex flex-col w-full max-w-5xl gap-3">
          {tiers.map((tier, index) => (
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
      </main>
    </>
  );
}
