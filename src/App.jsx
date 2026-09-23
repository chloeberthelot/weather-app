import Celsius from "./components/Celsius";
import Fahrenheit from "./components/Fahrenheit";
import "./App.css";
import "../src/css/Meteo.css";
import "../src/css/Convertisseur.css";

import { useState } from "react";
import Meteo from "./components/Meteo";

function App() {
  const [celsius, setCelsius] = useState("");
  const fahrenheit = celsius === "" ? "" : (celsius * 9) / 5 + 32;

  function handleFahrenheitChange(value) {
    setCelsius(value === "" ? "" : ((value - 32) * 5) / 9);
  }

  return (
    <main className="app">
      <Meteo />
      <section className="convertisseur">
        <h1>Convertisseur de température</h1>
        <p>Tape dans un champ, l'autre se met à jour en temps réel.</p>
        <div className="champs">
          <Celsius value={celsius} onChange={setCelsius} />
          <Fahrenheit value={fahrenheit} onChange={handleFahrenheitChange} />
        </div>
      </section>
    </main>
  );
}

export default App;
