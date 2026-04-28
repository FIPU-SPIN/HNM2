"use client";

import Image from "next/image";
import Quiz from "../../components/Quiz";
import kviz3 from "../../data/kviz3";
import { useState } from "react";

export default function NaglasciUParadigmiPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  return (
    <main className="bodydruga">

      <div className="naslovna">
        <div className="content-container paradigma">
          
          <h1 className="glavni-naslov">Naglasci u paradigmi</h1>

          <div className="slika-paradigma">
            <Image 
              src="/assets/images/Naglasci_u_paradigmi.png"
              alt="Naslovna slika stranice naglasci u paradigmi"
              width={800}
              height={600}
              priority
            />
          </div>
        </div>
      </div>

      <div className="paradigma-intro">

        <h2>Naglasci u paradigmi</h2>

        <p>
          U morfološkim paradigmama naglasak može biti stalan ili se može mijenjati.
          Može se mijenjati ton, trajanje ili mjesto naglaska.
        </p>

        <div className="primjer-box">
          <p><b>Promjenljivi tip:</b> vrijéme - vrȅmena - vremèna</p>
          <p><b>Nepromjenljivi tip:</b> ljúbav - ljúbavi</p>
        </div>

        <p>
          Ako se naglasak mijenja, riječ pripada promjenljivom naglasnom tipu,
          a ako ostaje isti, pripada nepromjenljivom tipu.
        </p>

        <h3>Općeparadigmatske promjene</h3>

        <p>
          U promjenljivim tipovima događaju se predvidljive naglasne promjene koje
          vrijede za velik broj riječi.
        </p>

        <ul>
          <li>silazni naglasci u V jd. i G mn.</li>
          <li>kraćenja u N mn.</li>
          <li>duljenja pred sonantima</li>
        </ul>

        <p>
          Te promjene nazivamo općeparadigmatskima jer slijede određena pravila.
        </p>

        <h3>Vrste promjena u paradigmi</h3>

        <p>U paradigmi se može promijeniti:</p>

        <ul>
          <li>ton</li>
          <li>trajanje</li>
          <li>mjesto</li>
          <li>ili njihove kombinacije</li>
        </ul>

        <p>
          Prema tome se riječi svrstavaju u različite podtipove.
        </p>

        <h3>Hiperkorekcija</h3>

        <p>
          U razgovornom jeziku često dolazi do pomicanja naglaska prema početku riječi
          i ondje gdje to nije standardno.
        </p>

        <div className="primjer-box">
          <p>napísati → nȁpisati</p>
          <p>zaùstavimo → zȁustavimo</p>
        </div>

        <p>
          Ta se pojava naziva <b>hiperkorekcija</b> i smatra se pogreškom u standardu.
        </p>

        <h3>Retrakcija (povlačenje naglaska)</h3>

        <p>
          Pomicanje naglaska prema početku riječi naziva se <b>retrakcija</b>.
        </p>

        <p>
          Povijesno su se silazni naglasci pomicali prema početku riječi, čime je
          nastao četveronaglasni sustav.
        </p>

        <div className="primjer-box">
          <p>vodȁ → vòda</p>
          <p>vīnȍ → víno</p>
        </div>

        <p>
          Time su nestale prednaglasne dužine, a pojavile se nove zanaglasne.
        </p>

        <h3>Metatonija i metataksa</h3>

        <p>
          Promjena tona naziva se <b>metatonija</b>, a premještanje naglaska
          <b> metataksa</b>.
        </p>

        <div className="primjer-box">
          <p>nogȁ → nòga</p>
          <p>rūkȁ → rúka</p>
          <p>junȃk → jùnāk</p>
          <p>žēnȃ → žénā</p>
        </div>

        <p>
          Kratkouzlazni naglasak nastaje pomicanjem na kratki slog, a dugouzlazni
          pomicanjem na dugi slog.
        </p>

      </div>
      <div className="kviz-cta">
      <h3>Provjeri znanje</h3>
      <p>
        Nakon što si pročitao/la lekciju, možeš riješiti kratki kviz i provjeriti razumijevanje.
      </p>
      <button onClick={() => setShowQuiz(true)} className="start-quiz-btn">
        KRENI NA KVIZ
      </button>
      </div>

      {showQuiz && <Quiz steps={kviz3} />}
     
    </main>
  );
}