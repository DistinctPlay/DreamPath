// pages/index.js
import { useState, useEffect, useRef } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { motion } from "framer-motion";
import Link from 'next/link';

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
    <div className="flex flex-col min-w-full">
      {/* HERO */}
      <section className="flex flex-col justify-center gap-10 items-center flex-grow text-center min-h-screen">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold glowing-text mb-6 "
        >
          Empowering <span className="text-blue-400">International</span> Students
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl text-xl text-gray-300 mb-10"
        >
         Discover how to navigate the college application process and achieve your dreams and join the <span className='font-extrabold'>thousands of students</span> we've helped.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToOffers}
          className="bg-blue-600 hover:bg-blue-500 px-10 py-5 rounded-2 text-xl font-semibold transition-all shadow-lg shadow-blue-500/50"
        >
          <span className='font-extrabold'>What We Offer</span>
        </motion.button>
      </section>

      {/* OFFERS */}
      <section
  ref={offersRef}
  className="h-full w-full flex flex-col justify-center items-center px-8 py-24 gap-10"
>
  <motion.p
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className="text-5xl font-bold glowing-text mb-16"
  >
    Our 5 <span className="text-blue-400">Core Offers</span>
  </motion.p>

   <div className="min-h-[800px] w-[1300px] grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      {
        title: <span className="text-4xl font-bold">Complete Common App Guide</span>
      },
      {
        title: <span className="text-4xl font-bold">AP Rankings and Relevance</span>
      },
      {
        title: <span className="text-4xl font-bold">Scholarship Database</span>
      },
      {
        title: <span className="text-4xl font-bold">Extracurricular Guide and Ranking</span>
      },
      {
        title: <span className="text-4xl font-bold">Complete SAT & ACT Preparation</span>
      },
      {
        title: <span className="text-4xl font-bold">One-on-One Consultation</span>
      }
    ].map((offer, idx) => (
      <motion.div
        key={idx}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="rounded-2xl bg-blue-800/30 border-2 border-blue-400 shadow-lg flex flex-col items-center justify-center text-center p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-blue-400/50 hover:scale-105"
      >
        <p className="text-2xl font-semibold glowing-text mb-4">{offer.title}</p>
        <p className="text-lg text-gray-200">{offer.desc}</p>
      </motion.div>
    ))}
  </div>
</section>

      {/* SCENARIO */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 py-24 gap-10">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-5xl font-bold glowing-text mb-10 gap-10"
        >
          Why You <span className="text-blue-400">Need</span> This
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="max-w-4xl text-xl text-gray-300 text-center leading-relaxed gap-10"
        >
          Navigating the college application process can be overwhelming, especially for international students. From understanding the Common App to preparing for standardized tests, the journey is filled with challenges. Our comprehensive resources and personalized guidance are designed to simplify this process, ensuring you have the tools and support needed to succeed.
        </motion.p>
      </section>

    </div>
  );
}