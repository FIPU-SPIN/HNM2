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
          pool: current.items,
        },
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

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${((step + 1) / steps.length) * 100}%`,
          }}
        />
      </div>

      <div className="quiz-card">

        {/* Intro */}
        {current.type === "intro" && (
          <>
            <h1 className="glavni-naslov">{current.title}</h1>

            {current.image && (
              <Image
                src={current.image}
                width={600}
                height={500}
                alt="intro"
                className="quiz-image"
                style={{ display: "block", margin: "0 auto" }}
              />
            )}

            {current.text && <p>{current.text}</p>}
            {current.note && <div className="note-box">{current.note}</div>}
          </>
        )}

        {/* Info */}
        {current.type === "info" && (
          <>
            {current.title && <h2>{current.title}</h2>}
            <p className="question-text">{current.text}</p>
          </>
        )}

        {/* Audio */}
        {(current.type === "audio" || current.type === "audio2") && (
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

        {/* Odabir */}
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

        {/* Unesi odgovor */}
        {current.type === "input" && (
          <>
            <p className="question-text">{current.question}</p>

            <input
              type="text"
              value={answers[current.id] || ""}
              onChange={(e) =>
                handleSelect(current.id, e.target.value)
              }
              className="quiz-input"
            />
          </>
        )}

        {/* Segment Input */}
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
                      value={answers[current.id]?.[si]?.[i] || ""}
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

        {/* Višestruki odabir */}
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

        {/* Grupiranje */}
        {current.type === "group-sort" && groups[current.id] && (
          <>
            <p className="question-text">{current.question}</p>

            <div className="group-container">

              {["a", "b", "c"].map((groupKey) => (
                <div key={groupKey} className="group-box">
                  <h4>{current.groups[groupKey]}</h4>

                  {groups[current.id][groupKey].map((item, i) => (
                    <button
                      key={i}
                      className="word-pill"
                      onClick={() => {
                        setGroups((prev) => {
                          const updated = { ...prev[current.id] };

                          updated[groupKey] = updated[groupKey].filter(x => x !== item);
                          updated.pool.push(item);

                          return { ...prev, [current.id]: updated };
                        });
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              ))}

              <div className="group-box">
                <h4>Riječi</h4>

                {groups[current.id].pool.map((item, i) => (
                  <button
                    key={i}
                    className="option-pill"
                    onClick={() => {
                      const target = prompt("Upiši grupu: a, b ili c");

                      if (!["a", "b", "c"].includes(target)) return;

                      setGroups((prev) => {
                        const currentGroup = prev[current.id];

                        const newPool = [...currentGroup.pool];
                        const [moved] = newPool.splice(i, 1);

                        return {
                          ...prev,
                          [current.id]: {
                            ...currentGroup,
                            pool: newPool,
                            [target]: [...currentGroup[target], moved],
                          },
                        };
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

        {/* Feedback*/}
        {current.type === "feedback" && (
          <>
            <h1 className="glavni-naslov">{current.title}</h1>

            <p className="feedback-message">{current.message}</p>
            <p className="feedback-details">{current.details}</p>

            <button
              className="feedback-button"
              onClick={() => {
                localStorage.setItem("quizAnswers", JSON.stringify(answers));
                alert("Odgovori su spremljeni!");
              }}
            >
              {current.buttonText}
            </button>
          </>
        )}

        {/* Lampica */}
        {current.lamp && (
          <button className="lamp-btn" onClick={() => setLamp(current.lamp)}>
            💡
          </button>
        )}

        {/* NAV */}
        <div className="nav-buttons">
          <button
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
          >
            Povratak
          </button>

          {step < steps.length - 1 && (
            <button
              onClick={() => setStep(step + 1)}
              disabled={
                (current.type === "select" && !answers[current.id]) ||
                (current.type === "input" && !answers[current.id]) ||
                (current.type === "multi-select" && (!answers[current.id] || answers[current.id].length === 0)) ||
                (current.type === "segment-input" &&
                  !answers[current.id] ||
                  Object.values(answers[current.id] || {})
                    .flatMap((sentence) => Object.values(sentence || {}))
                    .every((val) => val === "")) ||
                (current.type === "group-sort" &&
                  (!groups[current.id] || groups[current.id].pool.length !== 0))
              }
            >
              {step === steps.length - 2 ? "Završi kviz" : "Nastavak"}
            </button>
          )}
        </div>

      </div>

      {/* Modal */}
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