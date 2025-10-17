import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../lib/firebase";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Interviews() {
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

  const interviews = [
    {
      id: 1,
      name: "Arjun Patel",
      title: "Computer Science @ MIT",
      description:
        "Arjun discusses AP Computer Science, robotics, and his path to MIT.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your YouTube link
    },
    {
      id: 2,
      name: "Sarah Lin",
      title: "Finance @ NYU Stern",
      description:
        "Sarah shares how FBLA leadership and networking helped her succeed.",
      videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    },
  ];

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center px-4 py-10 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Alumni Interviews</h2>
        <p className="text-gray-600 mb-10 text-center max-w-2xl">
          Watch alumni share their experiences, lessons, and advice for high schoolers pursuing their dreams.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={interview.videoUrl}
                  title={interview.name}
                  allowFullScreen
                  className="w-full h-60 md:h-48 lg:h-56"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">{interview.name}</h3>
                <p className="text-blue-600 text-sm mb-2">{interview.title}</p>
                <p className="text-gray-600 text-sm">{interview.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
