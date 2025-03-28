//#region Imports
import Header from "../components/header";
import Link from 'next/link';
//#endregion


//#region Home Section
export default function Home() {
  return (
    <>
      <Header/>

      {/* Hero Section */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-4">Code Smarter. Build Faster.</h2>
        <p className="text-lg text-gray-400 mb-6">
          Buy & sell code tools, templates, scripts, and services - all in one place.
        </p>
        <Link href="/storepage" className="bg-white text-black px-6 py-3 text-lg font-medium rounded hover:bg-gray-200">
          Browse
        </Link>
      </section>

      {/* Sample Tools Section */}
      <section id="featured" className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">Featured Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-xl transition">
                <h4 className="text-xl front-semibold mb-2">Tool #{i}</h4>
                <p className="text-gray-400 mb-4">A powerful script or template to save hours of dev time.</p>
                <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">View Tool</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 text-center py-8 text-sm">
        &copy; {new Date().getFullYear()} Devly. All rights reserved.
      </footer>
    </>
  );
}
//#endregion