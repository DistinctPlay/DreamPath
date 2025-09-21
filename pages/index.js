// pages/index.js
import { useRef } from 'react';
import { motion } from "framer-motion";

export default function Home() {
  const offersRef = useRef(null);

  const scrollToOffers = () => {
    offersRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col min-w-full bg-gray-900 text-gray-100">
      {/* HERO */}
      <section className="flex flex-col justify-center gap-8 items-center flex-grow text-center min-h-screen px-4">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold glowing-text mb-6 leading-tight"
        >
          Empowering <span className="text-blue-400">Your Path</span> For Success
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl sm:max-w-3xl text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
        >
          Discover how to navigate the college application process and achieve your dreams.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToOffers}
          className="bg-blue-600 hover:bg-blue-500 px-6 sm:px-10 py-3 sm:py-5 rounded-xl text-lg sm:text-xl font-semibold transition-all shadow-lg shadow-blue-500/50"
        >
          <span className='font-extrabold'>What We Offer</span>
        </motion.button>
      </section>

      {/* OFFERS */}
      <section
        ref={offersRef}
        className="w-full flex flex-col justify-center items-center px-4 sm:px-8 py-16 sm:py-24 gap-10"
      >
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold glowing-text mb-8 sm:mb-16 text-center"
        >
          Our 5 <span className="text-blue-400">Core Offers</span>
        </motion.p>

        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Complete Common App Guide" },
            { title: "AP Rankings and Relevance" },
            { title: "Scholarship Database" },
            { title: "Extracurricular Guide and Ranking" },
            { title: "Complete SAT & ACT Preparation" },
            { title: "Q&A Sessions" }
          ].map((offer, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="rounded-2xl bg-blue-800/30 border-2 border-blue-400 shadow-lg 
                         flex flex-col items-center justify-center text-center 
                         p-6 transition-all duration-300 hover:border-blue-300 
                         hover:shadow-blue-400/50 hover:scale-105"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-semibold glowing-text mb-4">{offer.title}</p>
              <p className="text-sm sm:text-base md:text-lg text-gray-200">{offer.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SCENARIO */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 py-16 sm:py-24 gap-10">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold glowing-text mb-6 text-center"
        >
          Why You <span className="text-blue-400">Need</span> This
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="max-w-2xl sm:max-w-4xl text-base sm:text-lg md:text-xl text-gray-300 text-center leading-relaxed"
        >
          Navigating the college application process can be overwhelming, especially for international students. From understanding the Common App to preparing for standardized tests, the journey is filled with challenges. Our comprehensive resources and personalized guidance are designed to simplify this process, ensuring you have the tools and support needed to succeed.
        </motion.p>
      </section>
    </div>
  );
}
