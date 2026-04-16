"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Quiz({ steps }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [lamp, setLamp] = useState(null);
  const [groups, setGroups] = useState({});
  const current = steps[step];

   useEffect(() => {
    if (!current) return;

    if (current.type === "group-sort" && current.id && !groups[current.id]) {
      setGroups((prev) => ({
        ...prev,
        [current.id]: {
          a: [],
          b: [],
          c: [],
          pool: current.items
        }
      }));
    }
  }, [current, groups]);

  const handleSelect = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="quiz-page">

      <div className="quiz-card">

        {current.type === "intro" && (
          <>
            <h1 className="glavni-naslov">{current.title}</h1>

            <Image
              src={current.image}
              width={600}
              height={500}
              alt="karta"
              className="quiz-image"
              style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
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
            <p className="question-text">{current.question || current.text}</p>

            {current.options && (
              <div className="options-grid">
                {current.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(current.id, opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
        {current.type === "input" && (
            <>
              <p className="question-text">{current.question}</p>

              <input
                type="text"
                placeholder={current.placeholder}
                value={answers[current.id] || ""}
                onChange={(e) =>
                  handleSelect(current.id, e.target.value)
                }
                className="quiz-input"
              />
            </>
          )}

        {current.lamp && (
          <button className="lamp-btn" onClick={() => setLamp(current.lamp)}>
            💡 
          </button>
        )}

        <div className="nav-buttons">
          {step < steps.length - 1 && (
          <button disabled={step === 0} onClick={() => setStep(step - 1)}>
            Povratak
          </button>
        )}

          {step < steps.length - 2 ? (
            <button
              onClick={() => setStep(step + 1)}
              disabled={
                current.type === "select"
                  ? !answers[current.id]
                  : current.type === "input"
                  ? !answers[current.id]
                  : false
              }
              className={
                (current.type === "select" && !answers[current.id]) ||
                (current.type === "input" && !answers[current.id])
                  ? "disabled-btn"
                  : ""
              }
            >
              Nastavak
            </button>
          ) : step === steps.length - 2 ? (
            <button onClick={() => setStep(step + 1)}>Završi kviz</button>
          ) : null}
        </div>

        {current.type === "segment-input" && (
          <>
            <p className="question-text">{current.question}</p>

            {current.sentences.map((s, si) => (
              <div key={si} className="segment-row">
                <p className="segment-prompt">{s.prompt}</p>

                <div className="segment-inputs">
                  {Array.from({ length: s.parts }).map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      value={
                        answers[current.id]?.[si]?.[i] || ""
                      }
                      onChange={(e) =>
                        setAnswers((prev) => {
                          const prevQ = prev[current.id] || {};
                          const prevSentence = prevQ[si] || {};

                          return {
                            ...prev,
                            [current.id]: {
                              ...prevQ,
                              [si]: {
                                ...prevSentence,
                                [i]: e.target.value,
                              },
                            },
                          };
                        })
                      }
                      className="quiz-input small"
                    />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        {current.type === "multi-select" && (
          <>
            <p className="question-text">{current.question}</p>

            <div className="options-grid">
              {current.options.map((opt, i) => (
                <button
                  key={i}
                  className={`option-pill ${
                    answers[current.id]?.includes(i) ? "active" : ""
                  }`}
                  onClick={() => {
                    setAnswers((prev) => {
                      const prevArr = prev[current.id] || [];

                      return {
                        ...prev,
                        [current.id]: prevArr.includes(i)
                          ? prevArr.filter((x) => x !== i)
                          : [...prevArr, i],
                      };
                    });
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}

        {current.type === "categorize-input" && (
          <>
            <p className="question-text">{current.question}</p>

            {current.categories.map((cat, ci) => (
              <div key={ci} className="category-box">
                <h4>{cat}</h4>

                <div className="drop-zone">
                  {(answers[current.id]?.[ci] || []).map((item, i) => (
                    <span key={i} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="items-box">
              {current.items.map((item, i) => (
                <button
                  key={i}
                  className="option-pill"
                  onClick={() => {
                    setAnswers((prev) => {
                      const prevQ = prev[current.id] || {};

                      // ako već postoji, dodaj u kategoriju 0 (privremeno)
                      return {
                        ...prev,
                        [current.id]: {
                          ...prevQ,
                          0: [...(prevQ[0] || []), item],
                        },
                      };
                    });
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </>
        )}

        {current.type === "group-sort" && groups[current.id] && (
          <>
            <p className="question-text">{current.question}</p>

            <div className="group-container">

              {/* NAGLASNICE */}
              <div className="group-box">
                <h4>{current.groups.a}</h4>

                {groups[current.id].a.map((item, i) => (
                  <button
                    key={i}
                    className="word-pill"
                    onClick={() => {
                      setGroups((prev) => {
                        const updated = { ...prev[current.id] };

                        updated.a = updated.a.filter(x => x !== item);
                        updated.pool.push(item);

                        return { ...prev, [current.id]: updated };
                      });
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="group-box">
                <h4>{current.groups.b}</h4>

                {groups[current.id].b.map((item, i) => (
                  <button
                    key={i}
                    className="word-pill"
                    onClick={() => {
                      setGroups((prev) => {
                        const updated = { ...prev[current.id] };

                        updated.b = updated.b.filter(x => x !== item);
                        updated.pool.push(item);

                        return { ...prev, [current.id]: updated };
                      });
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="group-box">
                <h4>{current.groups.c}</h4>

                {groups[current.id].c.map((item, i) => (
                  <button
                    key={i}
                    className="word-pill"
                    onClick={() => {
                      setGroups((prev) => {
                        const updated = { ...prev[current.id] };

                        updated.c = updated.c.filter(x => x !== item);
                        updated.pool.push(item);

                        return { ...prev, [current.id]: updated };
                      });
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="group-box">
                <h4>Riječi</h4>

                {groups[current.id].pool.map((item, i) => (
                  <button
                    key={i}
                    className="option-pill"
                    onClick={() => {
                      const target = prompt("a / b / c");

                      if (!target) return;

                      setGroups((prev) => {
                        const updated = { ...prev[current.id] };

                        updated.pool = updated.pool.filter(x => x !== item);
                        updated[target].push(item);

                        return { ...prev, [current.id]: updated };
                      });
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>

            </div>
          </>
        )}

        {current.type === "feedback" && (
          <>
            <h1 className="glavni-naslov">{current.title}</h1>

            <p className="feedback-message">{current.message}</p>
            <p className="feedback-details">{current.details}</p>

            <button
              className="feedback-button"
              onClick={() => {
                console.log("Odgovori:", answers);
                localStorage.setItem("quizAnswers", JSON.stringify(answers));
                alert("Odgovori su spremljeni!");
              }}
            >
              {current.buttonText}
            </button>
          </>
        )}

      </div>      

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