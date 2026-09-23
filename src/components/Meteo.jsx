import { useState } from "react";

function Meteo() {
  const [ville, setVille] = useState("");
  const [meteo, setMeteo] = useState(null);
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState(null);

  async function chercherMeteo(nomVille) {
    setChargement(true);
    setErreur(null);

    try {
      const reponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${nomVille}&appid=${import.meta.env.VITE_OPENWEATHER_KEY}&units=metric&lang=fr`,
      );

      if (!reponse.ok) {
        throw new Error("Ville introuvable");
      }

      const donnees = await reponse.json();
      setMeteo(donnees);
    } catch (erreur) {
      setErreur(erreur.message);
      setMeteo(null);
    } finally {
      setChargement(false);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    chercherMeteo(ville);
  };
  return (
    <section className="meteo">
      <form className="recherche" onSubmit={handleSubmit}>
        <input
          type="text"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          placeholder="Ville"
        />
        <button type="submit">Rechercher</button>
      </form>
      {chargement && <p className="message">Chargement...</p>}
      {erreur && <p className="message erreur">{erreur}</p>}
      {meteo && (
        <div className="resultat">
          <p className="ville">{meteo.name}</p>
          <img
            src={`https://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`}
            alt={meteo.weather[0].description}
          />
          <p className="temperature">{Math.round(meteo.main.temp)}°C</p>
          <p className="description">{meteo.weather[0].description}</p>
        </div>
      )}
    </section>
  );
}

export default Meteo;
