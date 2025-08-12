export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-[#3B82F6] text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} DreamPath. All rights reserved.</p>
      </div>
    </footer>
  );
}
