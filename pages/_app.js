import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ParticleBackground from "../components/ParticleBackground";

export default function App({ Component, pageProps }){
  return (
     <div className="min-h-screen bg-night text-white">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow text-center px-4 gap-8 min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}