import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../lib/firebase";

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
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-500 text-lg">Loading...</p>
    );

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 px-4 py-12">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Alumni Interviews
      </h2>
      <p className="text-gray-600 mb-12 text-center max-w-2xl text-lg">
        Watch alumni share their experiences, lessons, and advice for high
        schoolers pursuing their dreams.
      </p>
       <p className="text-gray-300 text-lg text-center mb-8 max-w-xl">
        Coming Soon — Stay tuned for insights and advice from successful alumni!
      </p>
      {/*
      <div className="flex flex-col items-center w-full space-y-12">
        {interviews.map((interview) => (
          <div
            key={interview.id}
            className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-300 hover:shadow-blue-200 transition-all duration-500 p-6 w-full max-w-4xl transform hover:-translate-y-2"
          >
            <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 shadow-md">
              <iframe
                src={interview.videoUrl}
                title={interview.name}
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-bold text-gray-800">
                {interview.name}
              </h3>
              <p className="text-blue-600 text-lg mb-2">{interview.title}</p>
              <p className="text-gray-700 text-base">{interview.description}</p>
            </div>
          </div>
        ))}
      </div>
      */}
    </section>
  );
}
      
