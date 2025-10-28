export default function ResourcesPage() {
  const resources = [
    {
      category: "🎓 College Prep",
      links: [
        { name: "Common App", url: "https://www.commonapp.org/" },
        { name: "College Board", url: "https://www.collegeboard.org/" },
        { name: "FAFSA", url: "https://studentaid.gov/" },
      ],
    },
    {
      category: "💰 Scholarships",
      links: [
        { name: "Fastweb", url: "https://www.fastweb.com/" },
        { name: "Niche Scholarships", url: "https://www.niche.com/colleges/scholarships/" },
        { name: "Scholarships.com", url: "https://www.scholarships.com/" },
      ],
    },
    {
      category: "💼 Career & Skills",
      links: [
        { name: "LinkedIn Learning", url: "https://www.linkedin.com/learning/" },
        { name: "Coursera", url: "https://www.coursera.org/" },
        { name: "Khan Academy", url: "https://www.khanacademy.org/" },
      ],
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-10 py-16 bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 text-white">
      <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 text-blue-400 drop-shadow-lg">
        Resources
      </p>
      <p className="text-gray-300 text-center max-w-2xl mb-12 text-base sm:text-lg leading-relaxed">
        Explore trusted tools, websites, and guides to help you with college planning, scholarships, and career development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {resources.map((section, idx) => (
          <div
            key={idx}
            className="bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
          >
            <p className="text-2xl font-bold mb-4 text-blue-400">{section.category}</p>
            <ul className="space-y-3 text-gray-300 text-base">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-all"
                  >
                    ➜ {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
