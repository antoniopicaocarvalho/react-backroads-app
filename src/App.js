import Navbar from "./components/NavBar/NavBar.js";
import Hero from "./components/Hero/Hero.js";
import About from "./components/About/About.js";
import Services from "./components/Services/Services.js";
import Tours from "./components/Tours/Tours.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  // console.log("hello");
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
