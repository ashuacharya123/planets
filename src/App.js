import "./App.css";

import Hero from "./components/hero.jsx";
import Planets from "./components/planets.jsx";
import Footer from "./components/footer.jsx";
import Contacts from "./components/contacts.jsx";

function App() {
  return (
    <div className="CONTAINER">
      <Hero />
      <Planets />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
