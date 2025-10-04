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
      text: "text-indigo-900",
      items: [
        { name: "IMO Medalist", img: "/tiers/imo.png" },
        { name: "ISEF Grand Prize", img: "/tiers/isef.png" },
        { name: "Regeneron Finalist", img: "/tiers/regeneron.png" },
        { name: "International Olympiad", img: "/tiers/olympiad.png" },
      ],
    },
    {
      tier: "Platinum I",
      color: "bg-indigo-200",
      text: "text-indigo-900",
      items: [
        { name: "RSI", img: "/tiers/rsi.png" },
        { name: "USACO Camp", img: "/tiers/usaco.png" },
        { name: "YoungArts Winner", img: "/tiers/youngarts.png" },
        { name: "ISEF Category Winner", img: "/tiers/isef2.png" },
      ],
    },
    {
      tier: "Diamond II",
      color: "bg-cyan-300",
      text: "text-cyan-900",
      items: [
        { name: "USAMO Qualifier", img: "/tiers/usamo.png" },
        { name: "Regeneron Top 300", img: "/tiers/regeneron2.png" },
        { name: "MIT PRIMES", img: "/tiers/primes.png" },
        { name: "Scholastic Gold", img: "/tiers/scholastic.png" },
      ],
    },
    {
      tier: "Diamond I",
      color: "bg-cyan-200",
      text: "text-cyan-900",
      items: [
        { name: "Science Olympiad Nationals", img: "/tiers/scio.png" },
        { name: "YES Competition", img: "/tiers/yes.png" },
        { name: "NSDA Nationals", img: "/tiers/nsda.png" },
        { name: "CyberPatriot", img: "/tiers/cyber.png" },
      ],
    },
    {
      tier: "Gold II",
      color: "bg-yellow-300",
      text: "text-yellow-900",
      items: [
        { name: "ISEF Finalist", img: "/tiers/isef3.png" },
        { name: "FBLA Nationals", img: "/tiers/fbla.png" },
        { name: "HOSA ILC", img: "/tiers/hosa.png" },
        { name: "AMC Perfect", img: "/tiers/amc.png" },
      ],
    },
    {
      tier: "Gold I",
      color: "bg-yellow-200",
      text: "text-yellow-900",
      items: [
        { name: "USAAAO", img: "/tiers/usaaao.png" },
        { name: "Governor’s School", img: "/tiers/govschool.png" },
        { name: "Boys/Girls State", img: "/tiers/boysstate.png" },
        { name: "DECA ICDC", img: "/tiers/deca.png" },
      ],
    },
    {
      tier: "Silver II",
      color: "bg-gray-300",
      text: "text-gray-900",
      items: [
        { name: "Science Fair State Winner", img: "/tiers/scifair.png" },
        { name: "Scholastic Silver Key", img: "/tiers/silverkey.png" },
        { name: "Class President", img: "/tiers/president.png" },
        { name: "Quiz Bowl Winner", img: "/tiers/quiz.png" },
      ],
    },
    {
      tier: "Silver I",
      color: "bg-gray-200",
      text: "text-gray-900",
      items: [
        { name: "Eagle Scout", img: "/tiers/scout.png" },
        { name: "NHS", img: "/tiers/nhs.png" },
        { name: "Varsity Captain", img: "/tiers/varsity.png" },
        { name: "Local Music Award", img: "/tiers/music.png" },
      ],
    },
    {
      tier: "Bronze II",
      color: "bg-amber-200",
      text: "text-amber-900",
      items: [
        { name: "Club Founder", img: "/tiers/club.png" },
        { name: "Part-Time Job", img: "/tiers/job.png" },
        { name: "Local Volunteering", img: "/tiers/volunteer.png" },
        { name: "Essay Contest", img: "/tiers/essay.png" },
      ],
    },
    {
      tier: "Bronze I",
      color: "bg-amber-100",
      text: "text-amber-900",
      items: [
        { name: "Club Member", img: "/tiers/clubmember.png" },
        { name: "JV Sports", img: "/tiers/jv.png" },
        { name: "Honor Roll", img: "/tiers/honor.png" },
        { name: "Beta Club", img: "/tiers/beta.png" },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow px-4 py-10 min-h-screen">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Extracurriculars — Tier List
        </h2>
        <p className="text-slate-700 text-center max-w-3xl mb-8">
          Ranked from most common (Bronze I) to rarest (Platinum II).
          <br />
          Visual tier list layout — hover or tap to see activity names.
        </p>

        <div className="flex flex-col w-full max-w-5xl gap-3">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-center sm:items-stretch rounded-xl shadow-md overflow-hidden ${tier.color}`}
            >
              {/* Tier label */}
              <div
                className={`flex items-center justify-center sm:w-32 w-full sm:border-r-4 border-black p-2 font-bold text-lg sm:text-xl ${tier.text}`}
              >
                {tier.tier}
              </div>

              {/* Tier items (icons) */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 p-3 bg-white/60 flex-1">
                {tier.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center group relative"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-md shadow hover:scale-105 transition-transform"
                    />
                    <span className="absolute bottom-[-1.5rem] opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
