// pages/_app.js
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col bg-night text-white">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
