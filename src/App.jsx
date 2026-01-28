import { useState, useTransition } from "react";
import"./App.css";
import { LoadingScreen  } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import {Footer} from "./components/sections/Footer";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  
  // Fallback: if loading takes too long, show the app anyway
  useState(() => {
    const fallbackTimer = setTimeout(() => {
      if (!isLoaded) {
        console.warn('Loading screen timeout, showing app anyway');
        setIsLoaded(true);
      }
    }, 10000); // 10 second fallback

    return () => clearTimeout(fallbackTimer);
  }, [isLoaded]);

  const handleLoadingComplete = () => {
    setIsLoaded(true);
  };

  const handleLoadingError = (error) => {
    console.error('Loading error:', error);
    setLoadingError(error);
    setIsLoaded(true); // Show app even if loading fails
  };

  return (
    <>
      {!isLoaded && (
        <LoadingScreen 
          onComplete={handleLoadingComplete}
          onError={handleLoadingError}
        />
      )}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        {loadingError && (
          <div className="fixed top-0 left-0 right-0 bg-red-900 text-white p-2 text-center z-50">
            Loading Warning: {loadingError.message}
          </div>
        )}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
