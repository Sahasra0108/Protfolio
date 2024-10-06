import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Hackathons } from "./components/Hackathons";
import AOS from "aos";
import "aos/dist/aos.css";
// import { GlobeDemo } from "./components/githubGlobe";

function App() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="App">
      <NavBar />

      <Banner />

      <About />

      <Skills />

      <Projects />

      <Education />

      <Hackathons />

      {/* <GlobeDemo /> */}

      <Contact />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
