import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-8 py-16 bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 text-white">
      <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 text-blue-400 drop-shadow-lg">
        Contact Us
      </p>
      <p className="text-gray-300 text-center max-w-2xl mb-10 text-base sm:text-lg leading-relaxed">
        Have questions, suggestions, or feedback? We’d love to hear from you!  
        Fill out the form below and we’ll get back to you soon.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800/60 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-2xl border border-blue-400/40 transition-all hover:shadow-blue-500/40"
      >
        <div className="mb-6">
          <label className="block text-gray-200 font-semibold mb-2 text-lg">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-blue-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-200 font-semibold mb-2 text-lg">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-blue-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-200 font-semibold mb-2 text-lg">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-blue-400/30 text-white placeholder-gray-400 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 sm:py-4 rounded-lg text-lg transition-all shadow-md shadow-blue-500/30 hover:shadow-blue-400/50"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
