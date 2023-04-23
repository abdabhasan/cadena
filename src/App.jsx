import { Navbar } from "./components";
import { Hero, Brand, DigitalWealth, Unique, Footer } from "./sections";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brand />
      <DigitalWealth />
      <Unique />
      <Footer />
    </div>
  );
}

export default App;
