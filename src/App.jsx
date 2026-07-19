import About from "./components/About"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technologies"
import Project from "./components/Project"
import Contact from "./components/Contact"



function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <Navbar />
        <main className="space-y-24">
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Project />
          <Contact />
        </main>
      </div>
      
      {/* Footer / Branding */}
      <footer className="py-10 text-center text-neutral-500 text-sm">
        &copy; {new Date().getFullYear()} Anjali Sharma. All rights reserved.
      </footer>
    </div>
  );
}


export default App
