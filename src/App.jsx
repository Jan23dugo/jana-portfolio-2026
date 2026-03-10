import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Tools from "./components/Tools";

function App() {
  return (
    <>
    <Navbar />
    <main>
      <Home />
      <About />
      <Services />
      <Projects />
      <Tools />
      <Contact />
    </main>
    </>
  );
}

export default App;
