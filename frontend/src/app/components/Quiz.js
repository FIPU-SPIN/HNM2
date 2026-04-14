"use client";

import { useState } from "react";
import Image from "next/image";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [lamp, setLamp] = useState(null);

  const handleSelect = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const steps = [
    {
      type: "intro",
      title: "Odredite svoje narječje",
      image: "/assets/images/karta-narjecja.png",
      text:
        "Odredite narječje koje je obilježilo Vaš govor. Pronađite na karti mjesto Vašega najdužega boravka i školovanja. Uzmite u obzir i podrijetlo roditelja/staratelja.",
      note:
        "Plava = čakavsko | Zelena = kajkavsko | Žuta = štokavsko",
    },

    /* --- 1. --- */ 
    {
      type: "select",
      id: "q1",
      question:
        "Mjesto u kojemu sam najduže boravio/boravila pripada ______ narječju. ",
      options: ["kajkavskom", "čakavskom", "štokavskom"],
    },

    {
      type: "select",
      id: "q2",
      question:
        "Govor mojih roditelja/staratelja pripada ______ narječju.",
      options: ["istom", "različitom"],
        },

    /* --- 2. --- */ 
  
    {
      type: "select",
      title: "Odredi regiju koja je obilježila Vaš govor. ",
      id: "q3",
      question:
        "Moje mjesto najdužega boravka pripada _________________ regiji.",
      options: ["zapadnoj", "sjevernoj", "južnoj", "istočnoj"],
      lamp: "Ovisno o podrijetlu roditelja/staratelja, migracijama i obrazovanju, Vaš se naglasni sustav može razlikovati od regionalnog. Tada je sustav miješani ili prijelazni.",
        },

    /* --- 3. ---*/ 

    {
      type: "audio",
      title: "Poslušajte rečenice Ponovo je zasjalo sunce. Nakon kiše pojavi se duga.",
      voices: ["govornik 1", "govornik 2", "govornica 3", "govornica 4"],
    },

    {
      type: "select",
      id: "q4",
      question:
        "Možete li prepoznati iz koje regije dolaze govornici?",
      options: ["sjeverna", "zapadna", "južna", "istočna"],
      lamp:
        "Govornici koje ste čuli u prethodnom primjeru pročitali su rečenice napisane na standardnom hrvatskom jeziku, a ipak čujemo da je govornik 1 iz zapadne Hrvatske, negdje s područja Istre (područje čakavskih dijalekata), da je govornik 2 iz središnje/sjeverne Hrvatske, iz Zagreba ili okolice (područje kajkavskih dijalekata), da je govornica 3 iz istočne Hrvatske, iz Osijeka (područje štokavskih dijalekata) i da je govornica 4 iz južne Hrvatske, iz Dalmacije (područje štokavskih i čakavskih dijalekata). Kod govornice 4 prema nekim govornim obilježjima možemo prepoznati ne samo širu regiju već i da potječe iz Dubrovnika. Govornici iz Dubrovnika i Osijeka u govoru imaju četiri naglaska, a govornici iz Pule i Zagreba najčešće jedan.",
    },

    /* --- 4. --- */ 
    {
      type: "audio",
      title: "Poslušajte izgovor riječi kiša, sunce, trava, rosa, pamtiti, napisati, mjesec, slikar, mornar, seljak kod dvaju govornika hrvatskoga jezika. Razmislite i odgovorite: je li Vaš govor, kada se trudite izgovarati standardno, sličniji govoru prvoga ili drugoga govornika?",
      voices: ["govornik 1", "govornik 2"],
    },

    {
      type: "select",
      id: "q5",
      question:
        "Moj je naglasni sustav sličniji ____________.",
      options: ["govorniku 1", "govorniku 2"],
      lamp:
        "Prvi govornik, spiker, riječi je izgovorio standardno, s četiri naglaska i gdje je potrebno sa zanaglasnom dužinom. Drugi govornik, porijeklom iz Pule, riječi je izgovorio s jednim udarnim naglaskom, bez razlike u trajanju dugih i kratkih naglasaka, bez razlike u tonu uzlaznih i silaznih naglasaka te bez zanaglasne dužine. U nekim se riječima drugi govornik razlikuje od prvoga i po izgovoru mjesta naglaska",
    },

    /* --- 5. --- */ 
    {
      type: "select",
      title: "Ako je Vaš izgovor sličniji prvome govorniku, vjerojatno je Vaš naglasni sustav VISINSKI, a ako je sličniji drugome, onda je Vaš naglasni sustav vjerojatno UDARNI. Postoje i sustavi u kojemu su značajke i jednoga i drugoga, nastale dodirom dvaju sustava (često migracijama govornika) pa se takav sustav ponegdje naziva prijelazni ili miješani.",
      id: "q6",
      question:
        "Moj je naglasni sustav __________.",
      options: ["udarni", "visinski", "miješani", "prijelazni"],
      lamp:
        "Na području štokavskoga narječja ostvaruje se primarno visinski naglasni sustav, a na području čakavskoga i kajkavskoga narječja visinski i udarni naglasni sustav. Kada analiziramo urbanolekte većih gradova na području čakavskoga narječja zapadne Hrvatske i na području kajkavskoga narječja sjeverne Hrvatske, čujemo pretežno udarni naglasni sustav.",
    },

    /* --- 6. --- */ 
     {
      type: "audio",
      title: "Poslušajte izgovor rečenica Ovo je naglasni priručnik. \"Nakon kiše pojavi se duga.\" dviju govornica iz visinskoga naglasnog sustava i dviju govornica iz udarnoga sustava.",
      voices: ["govornica iz Osijeka", "govornika iz Splita", "govornica iz Rijeke", "govornica iz Pule"],
    },

    {
      type: "select",
      id: "q7",
      question:
        "Koji izgovor pripada visinskom naglasnom sustavu, tj. čuje se uzlazni ton (obratite pozornost na riječi priručnik i duga)?",
      options: ["Osijek", "Split", "Rijeka", "Pula"],
      lamp:
        "U govoru govornica iz Osijeka i Splita čuju se uzlazni naglasci, primjerice u riječima priručnik i duga, a kod govornica iz Rijeke i Pule sve su riječi izgovorene jednim, udarnim naglaskom. Ako ste prethodno odgovorili da je Vaš naglasni sustav udarni, tada je Vaš izgovor sličniji govornicama iz Rijeke i Pule, a ako ste odgovorili da je Vaš izgovor visinski, tada je Vaš izgovor sličniji govornicama iz Osijeka ili Splita s obzirom na naglasak riječi.",
    },

    /* --- 7. --- to be dodano */ 
    
  ];

  const current = steps[step];

  return (
    <div className="quiz-page">

      <div className="quiz-card">

        {current.type === "intro" && (
          <>
            <h1 className="glavni-naslov">{current.title}</h1>

            <Image
              src={current.image}
              width={900}
              height={500}
              alt="karta"
              className="quiz-image"
            />

            <p>{current.text}</p>
            <div className="note-box">{current.note}</div>
          </>
        )}

        {current.type === "info" && <p>{current.text}</p>}
        {current.type === "audio" && (
          <>
            <h2>{current.title}</h2>

            <div className="audio-grid">
              {current.voices.map((v, i) => (
                <div key={i} className="audio-item disabled">
                  <div className="play-btn">▶</div>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {current.type === "audio2" && (
          <>
            <h2>{current.title}</h2>

            <div className="audio-grid">
              {current.voices.map((v, i) => (
                <div key={i} className="audio-item disabled">
                  <div className="play-btn">▶</div>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {current.type === "select" && (
          <>
            <p className="question-text">{current.question}</p>

            <div className="options-grid">
              {current.options.map((opt, i) => (
                <button
                  key={i}
                  className={`option-pill ${
                    answers[current.id] === opt ? "active" : ""
                  }`}
                  onClick={() => handleSelect(current.id, opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}

        {current.lamp && (
          <button className="lamp-btn" onClick={() => setLamp(current.lamp)}>
            💡 
          </button>
        )}

        {/* NAV */}
        <div className="nav-buttons">
          <button disabled={step === 0} onClick={() => setStep(step - 1)}>
            Nazad
          </button>

          <button onClick={() => setStep(step + 1)}>Dalje</button>
        </div>

      </div>

      {/* POPUP */}
      {lamp && (
        <div className="modal-overlay" onClick={() => setLamp(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <p>{lamp}</p>
            <button className="modal-close" onClick={() => setLamp(null)}>
              Zatvori
            </button>
          </div>
        </div>
      )}

    </div>
  );
}