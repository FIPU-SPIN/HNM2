export default function SlusamPage() {
  return (
    <main className="bodyslusam2">

          <div className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>

      <div className="quiz-wrapper">
        <div id="quiz-intro" className="quiz-intro">
          <h2 className="kviz">Pogodi naglasak</h2>
          <p>
            U ovom kratkom kvizu provjerit ćeš možeš li prepoznati
            hrvatske naglaske u riječima.
          </p>
          <button id="start-quiz">Započni</button>
        </div>

        <div id="quiz-ready" className="quiz-intro" style={{ display: "none" }}>
          <h2>🎧 Jeste li spremni?</h2>
          <p>
            Čekaju te <strong>3 pitanja</strong>. Klikni kada si spreman/na!
          </p>
          <button id="begin-quiz">Krenimo!</button>
        </div>

        <div id="quiz">
          <p id="question"></p>
          <div id="answers">
            <button data-answer="kratkosilazni"><b>Kratkosilazni</b></button>
            <button data-answer="kratkouzlazni"><b>Kratkouzlazni</b></button>
            <button data-answer="dugosilazni"><b>Dugosilazni</b></button>
            <button data-answer="dugouzlazni"><b>Dugouzlazni</b></button>
          </div>
          <p id="feedback"></p>
          <p id="progress"></p>
        </div>
      </div>
    </main>
  );
}