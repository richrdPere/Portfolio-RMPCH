// React
import React, {useRef} from "react";

// React-router-doom 
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";

// Components (Componentes)
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./components/About";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Curriculum from "./components/Curriculum";

function PortfolioApp() {

  // UseRef (Para refernciar elementos dentro del Lading Page)
  // PARA ABOUT
  const aboutMeRef = useRef(null);

  const scrollToAbout = () => {
    aboutMeRef.current.scrollIntoView({behavior: 'smooth'})
  }
  // PARA CONTACTO
  const contactMeRef = useRef(null);

  const scrollToContact = () => {
    contactMeRef.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className="w-[90%] mx-auto overflow-hidden max-w-screen-xl">

      <Header scrollToAbout={scrollToAbout} scrollToContact={scrollToContact}/>

      <main>

        <Routes>
          {/* About Me */}
          <Route
            path="/About"
            element={
              <>
                <About ref={aboutMeRef}/>
              </>
            }
          ></Route>

          {/* Curriculum */}
          <Route path="/Curriculum"
          element={
            <Curriculum/>
          }></Route>
          
          {/* What i do */}
          <Route
            path="/Proyects"
            element={
              <>
              <Proyects/>
              </>
            }
          ></Route>
          

        </Routes>
               
        {/* Skills */}
        <Skills/>

        {/* Contact me */}
        <ContactMe ref={contactMeRef}/>

        
      </main>

      <Footer />
    </div>
  );
}

export default PortfolioApp;
