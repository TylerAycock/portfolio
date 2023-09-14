import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="website">
      <div className="body">
        <Header />
        <Skills />
        <Projects />
      </div>
      <div className="footer">
        <Contact />
      </div>
    </div>
  );
}

export default App;
