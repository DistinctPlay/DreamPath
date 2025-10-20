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
          <span className='font-extrabold'>How to Use</span>
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
          Introducing <span className="text-blue-400">RiseTogether</span>
        </motion.p>
      <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-[60vh] rounded-2xl shadow-xl border-4 border-blue-500"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
        title="Welcome Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        </div>
        </section>
      </div>
  );
}
