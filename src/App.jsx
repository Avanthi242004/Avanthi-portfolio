// src/App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Reveal from "./components/Reveal.jsx";
import Extracurricular from "./components/Extracurricular.jsx";
import Loader from "./components/Loader.jsx";

function App() {
  const [theme, setTheme] = useState("dark");
  const [showActivities, setShowActivities] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenActivities={() => setShowActivities(true)}
      />

      <main className="wrapper">
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>

      <Footer />

      {showActivities && (
        <Extracurricular onClose={() => setShowActivities(false)} />
      )}
    </>
  );
}

export default App;
