// pages/resources.js
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ResourcesPage() {
  const resources = [
    {
      category: "College Prep",
      links: [
        { name: "Common App", url: "https://www.commonapp.org/" },
        { name: "College Board", url: "https://www.collegeboard.org/" },
        { name: "FAFSA", url: "https://studentaid.gov/" },
      ],
    },
    {
      category: "Scholarships",
      links: [
        { name: "Fastweb", url: "https://www.fastweb.com/" },
        { name: "Niche Scholarships", url: "https://www.niche.com/colleges/scholarships/" },
        { name: "Scholarships.com", url: "https://www.scholarships.com/" },
      ],
    },
    {
      category: "Career & Skills",
      links: [
        { name: "LinkedIn Learning", url: "https://www.linkedin.com/learning/" },
        { name: "Coursera", url: "https://www.coursera.org/" },
        { name: "Khan Academy", url: "https://www.khanacademy.org/" },
      ],
    },
  ];

  return (
    <>
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-12 min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl font-bold text-center mb-8">Resources</h1>
        <p className="text-gray-600 text-center max-w-2xl mb-12">
          Explore trusted tools, websites, and guides to help you with college, scholarships, and career development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {resources.map((section, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold mb-4 text-blue-700">{section.category}</h2>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
