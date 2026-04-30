"use client";

import Image from "next/image";
import Quiz from "../components/Quiz";
import kviz1 from "../data/kviz1";
import { useState } from "react";


export default function StoSveZnamPage() {
 const [showQuiz, setShowQuiz] = useState(false);

  return (
    <main className="bodydruga">

      {/* NASLOVNA */}
      <div className="naslovna">
        <div className="content-container stosveznam">
          
          <h1 className="glavni-naslov">Što sve znam</h1>

          <div className="slika-stosveznam">
            <Image
              src="/assets/images/stosveznam.jpg"
              alt="Naslovna slika stranice sto sve znam"
              width={1000}
              height={800}
              priority
            />
          </div>

        </div>
      </div>

      {/* UVOD */}
      <div className="stosveznam-intro">

        <p className="primjer">
          Ovo je mjesto za identificiranje svoga naglasnog sustava te za provjeru
          osnovnih znanja o naglascima i naglasnoj normi
        </p>

        <div className="primjer-box">
          <p>
            Vježbe su podijeljene u cjeline:
          </p>
          <p className="primjer">
            Koji je Vaš naglasni sustav? • Naglasni inventar • Distribucijska pravila • 
            Govorna riječ • Naglasak u paradigmi
          </p>
        </div>

        <p>
          Nakon ove razine spremni ste za uvježbavanje percepcije i produkcije naglasaka.
        </p>

        <h3>Jezična biografija govornika</h3>

        <p>
          Hrvatski jezik obuhvaća mjesne govore, gradske govore i hrvatski standardni jezik.
          Svaki govornik usvaja materinski jezik koji ima temelj u mjesnom govoru, ali i
          u gradskom govoru te razgovornom standardu.
        </p>

        <p>
          Polaskom u školu uči se standardni jezik koji je namijenjen formalnim situacijama.
          Sve to zajedno čini govornikovu jezičnu biografiju.
        </p>

        <h3>Naglasni sustavi</h3>

        <p>
          Standardni jezik temelji se na štokavskom narječju i četveronaglasnom sustavu.
          Kajkavski i čakavski govori te staroštokavski govori razlikuju se brojem naglasaka.
        </p>

        <p>
          Razlike su izraženije u sjevernim i zapadnim regijama, ali postoje i unutar
          štokavskog područja (istok i jug Hrvatske).
        </p>

        <div className="primjer-box">
          <p>
            Regionalne razlike mogu se uočiti u gradovima poput:
          </p>
          <p className="primjer">
            Zagreb • Rijeka • Osijek • Split
          </p>
        </div>

        <h3>Visinski naglasni sustav</h3>

        <p>
          Hrvatski standardni jezik ima visinski naglasni sustav s četiri naglaska:
          kratkosilazni, dugosilazni, kratkouzlazni i dugouzlazni.
        </p>

        <p>
          Takav sustav čest je u Slavoniji i Dalmaciji te u nekim govorima izvan Hrvatske.
        </p>

        <h3>Udarni naglasni sustav</h3>

        <p>
          Osim visinskog sustava postoji i udarni sustav u kojem je važno samo mjesto naglaska.
        </p>

        <p>
          Najčešće se pojavljuje u gradskim govorima (Zagreb, Rijeka, Pula) i među mlađim govornicima.
        </p>

        <div className="primjer-box">
          <p>
            Ključna razlika:
          </p>
          <p className="primjer">
            visinski = ton + duljina • udarni = pozicija naglaska
          </p>
        </div>

        <h3>Prepoznavanje govora</h3>

        <p>
          Govornici s visinskim sustavom često se mogu povezati s određenim regijama
          (Slavonija, Dalmacija).
        </p>

        <p>
          Kod udarnog sustava to je teže jer su govori slični, pa se često naziva
          “zagrebački tip”.
        </p>

        <p>
          Identifikacija je moguća i po izgovoru samoglasnika, suglasnika i intonaciji.
        </p>

      </div>
      
      {!showQuiz && (
        <div className="kviz-cta">
          <h3>🧠 Provjeri svoje znanje</h3>

          <p>
            Nakon lekcije pokreni kratki kviz i provjeri koliko dobro razumiješ naglasne sustave.
          </p>

          <button
            onClick={() => setShowQuiz(true)}
            className="start-quiz-btn"
          >
            Pokreni kviz
          </button>
        </div>
      )}

      {showQuiz && <Quiz steps={kviz1} />}

    </main>
  );
}