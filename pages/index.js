import { useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const offersRef = useRef(null);

  const scrollToOffers = () => {
    offersRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 text-gray-100 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="flex flex-col justify-center items-center text-center flex-grow min-h-screen px-6 sm:px-10 md:px-20 py-20 sm:py-24">
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-8 drop-shadow-lg"
        >
          Empowering{" "}
          <span className="text-blue-400 drop-shadow-md">Your Path</span> <br className="hidden sm:block" />
          For Success
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
        >
          Discover how to navigate the college application process, build your
          roadmap, and rise together with your peers.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToOffers}
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 sm:px-12 py-4 sm:py-5 rounded-xl text-lg sm:text-xl shadow-lg shadow-blue-500/40 transition-all"
        >
          How to Use
        </motion.button>
      </section>

      {/* INTRO VIDEO SECTION */}
      <section
        ref={offersRef}
        className="flex flex-col justify-center items-center w-full px-6 sm:px-10 md:px-16 py-20 sm:py-28 bg-gradient-to-b from-blue-950 to-gray-900 min-h-screen"
      >
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white mb-12 sm:mb-16 leading-snug"
        >
          Introducing <span className="text-blue-400">RiseTogether</span>
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-blue-400/40"
        >
          <iframe
            src="https://www.youtube.com/embed/M89e_MMjOyM?si=56nU7oS_yUhQHGTy"
            title="RiseTogether Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-10 text-center max-w-3xl leading-relaxed">
          Learn how to explore AP rankings, scholarships, extracurricular
          guidance, and career roadmaps — all in one platform designed for
          student success.
        </p>
      </section>
    </div>
  );
}
