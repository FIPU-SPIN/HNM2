import HeaderImg from "../components/HeaderImg";
import Footer from "../components/Footer";

export default function KojimNaglascimaPage() {
  return (
    <main className="bodyslusam2">

      <HeaderImg />

      <div className="quiz-wrapper">

        <div className="quiz-intro">
          <h2 className="kviz">Pogodi naglasak</h2>
          <p>
            U ovom kratkom kvizu provjerit ćeš možeš li prepoznati
            hrvatske naglaske u riječima.
          </p>
          <button>Započni</button>
        </div>

        <div className="quiz-intro" style={{ display: "none" }}>
          <h2>🎧 Jeste li spremni?</h2>
          <p>
            Čekaju te <strong>3 pitanja</strong>.  
            Klikni kada si spreman/na!
          </p>
          <button>Krenimo!</button>
        </div>

        <div>
          <p></p>

          <div id="answers">
            <button><b>Kratkosilazni</b></button>
            <button><b>Kratkouzlazni</b></button>
            <button><b>Dugosilazni</b></button>
            <button><b>Dugouzlazni</b></button>
          </div>

          <p></p>
          <p></p>
        </div>

      </div>

      <Footer />

    </main>
  );
}