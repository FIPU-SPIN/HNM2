"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Quiz({ steps }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [lamp, setLamp] = useState(null);
  const [groups, setGroups] = useState({});
  const [finished, setFinished] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
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

  if (finished) {
    return (
      <div className="quiz-page finished-screen">
        <div className="finished-card">

          <button
            className="close-x"
            onClick={() => window.location.href = "/"}
          >
            ✕
          </button>

          <h1 className="finished-title">🎉 Čestitamo!</h1>

          <p className="finished-text">
            Završili ste kviz.
          </p>

          <p className="finished-subtext">
            Vaši odgovori su uspješno zabilježeni.
          </p>

          <button
            className="finished-button"
            onClick={() => window.location.href = "/"}
          >
            Povratak na početnu
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-content">

        {/* PROGRESS */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((step + 1) / steps.length) * 100}%`,
            }}
          />
        </div>

        <div className="quiz-card">

          {/* ================= INTRO ================= */}
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

              {current.text && (
                <p className="quiz-text">{current.text}</p>
              )}

              {current.note && (
                <div className="note-box">{current.note}</div>
              )}
            </>
          )}

          {/* ================= INFO ================= */}
          {current.type === "info" && (
            <>
              {current.title && <h2>{current.title}</h2>}

              {current.image && (
                <Image
                  src={current.image}
                  width={600}
                  height={500}
                  alt="info"
                  className="quiz-image"
                  style={{ display: "block", margin: "0 auto" }}
                />
              )}

              <p className="question-text">{current.text}</p>
            </>
          )}

          {/* ================= AUDIO ================= */}
          {(current.type === "audio" || current.type === "audio2") && (
            <>
              <h2>{current.title}</h2>
              <div className="audio-grid">
                {current.voices.map((v, i) => (
                  <div key={i} className="audio-item">
                    <button
                      className="play-audio-btn"
                      onClick={() => {
                        new Audio(`http://localhost:5000${v.audio}`).play();
                      }}
                    >
                      🔊 {v.label}
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ================= AUDIO SELECT ================= */}
{current.type === "audio_select" && (
  <>
    <p className="question-text">{current.question}</p>

    {/* Ako ima voices niz (više audio zapisa) */}
    {current.voices && current.voices.length > 0 && (
      <div className="audio-grid">
        {current.voices.map((v, i) => (
          <div key={i} className="audio-item">
            <button
              className="play-audio-btn"
              onClick={() => {
                new Audio(`http://localhost:5000${v.audio}`).play();
              }}
            >
              🔊 {v.label}
            </button>
          </div>
        ))}
      </div>
    )}

    {/* Ako ima audio polje (jedan audio zapis) */}
    {current.audio && (
      <div className="audio-single">
        <audio 
          controls 
          src={`http://localhost:5000${current.audio}`} 
          className="audio-player"
        />
        <p className="audio-label">🔊 Poslušaj izgovor</p>
      </div>
    )}

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

          {/* ================= SELECT ================= */}
          {current.type === "select" && (
            <>
              {current.title && <h2>{current.title}</h2>}

              <p className="question-text">{current.question}</p>

              {current.image && (
                <Image
                  src={current.image}
                  width={600}
                  height={400}
                  alt="pitanje"
                  className="quiz-image"
                  style={{ display: "block", margin: "0 auto" }}
                />
              )}

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

          {/* ================= INPUT ================= */}
          {current.type === "input" && (
            <>
              <p className="question-text">{current.question}</p>

              {current.image && (
                <Image
                  src={current.image}
                  width={600}
                  height={400}
                  alt="pitanje"
                  className="quiz-image"
                  style={{ display: "block", margin: "0 auto" }}
                />
              )}

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

          {/* ================= SEGMENT INPUT ================= */}
          {current?.type === "segment-input" && (
            <>
              <p className="question-text">{current.question}</p>

              {current.image && (
                <Image
                  src={current.image}
                  width={600}
                  height={400}
                  alt="pitanje"
                  className="quiz-image"
                  style={{ display: "block", margin: "0 auto" }}
                />
              )}

              {(current.sentences || []).map((s, si) => (
                <div key={si} className="segment-row">

                  <p className="segment-prompt">{s.prompt}</p>

                  <div className="segment-inputs modern-segments">
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
                        className="segment-box"
                        placeholder="..."
                      />
                    ))}
                  </div>

                </div>
              ))}
            </>
          )}

          {/* ================= MULTI SELECT ================= */}
          {current.type === "multi-select" && (
            <>
              <p className="question-text">{current.question}</p>

              {current.image && (
                <Image
                  src={current.image}
                  width={600}
                  height={400}
                  alt="pitanje"
                  className="quiz-image"
                  style={{ display: "block", margin: "0 auto" }}
                />
              )}

              <div className="options-grid">
                {current.options.map((opt, i) => (
                  <button
                    key={i}
                    className={`option-pill ${
                      answers[current.id]?.includes(i)
                        ? "active"
                        : ""
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

          {/* ================= GROUP SORT ================= */}
          {current?.type === "group-sort" && current?.groups && groups[current.id] && (
            <>
              <p className="question-text">{current.question}</p>

              {current.image && (
                <Image
                  src={current.image}
                  width={600}
                  height={400}
                  alt="pitanje"
                  className="quiz-image"
                  style={{ display: "block", margin: "0 auto" }}
                />
              )}

              <div className="group-container">

                {/* GRUPE */}
                {["a", "b", "c"].map((groupKey) => (
                  <div
                    key={groupKey}
                    className="group-box clickable-box"
                    onClick={() => {
                      if (!selectedWord) return;

                      setGroups((prev) => {
                        const updated = { ...prev[current.id] };

                        updated.pool = updated.pool.filter(x => x !== selectedWord);
                        updated[groupKey] = [...updated[groupKey], selectedWord];

                        return {
                          ...prev,
                          [current.id]: updated,
                        };
                      });

                      setSelectedWord(null);
                    }}
                  >
                    <h4>{current.groups[groupKey]}</h4>

                    {groups[current.id][groupKey].map((item, i) => (
                      <button
                        key={i}
                        className="word-pill"
                        onClick={(e) => {
                          e.stopPropagation();

                          setGroups((prev) => {
                            const updated = { ...prev[current.id] };

                            updated[groupKey] = updated[groupKey].filter(
                              (x) => x !== item
                            );

                            updated.pool = [...updated.pool, item];

                            return {
                              ...prev,
                              [current.id]: updated,
                            };
                          });
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                ))}

                {/* POOL */}
                <div className="group-box">
                  <h4>Riječi</h4>

                  {groups[current.id].pool.map((item, i) => (
                    <button
                      key={i}
                      className={`word-pill ${selectedWord === item ? "selected" : ""}`}
                      onClick={() => setSelectedWord(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

              </div>
            </>
          )}

          {/* ================= FEEDBACK ================= */}
          {current.type === "feedback" && (
            <>
              <h1 className="glavni-naslov">{current.title}</h1>

              <p className="feedback-message">
                {current.message}
              </p>

              <p className="feedback-details">
                {current.details}
              </p>

              <button
                className="feedback-button"
                onClick={() => {
                  localStorage.setItem(
                    "quizAnswers",
                    JSON.stringify(answers)
                  );

                  alert("Odgovori su spremljeni!");
                }}
              >
                {current.buttonText}
              </button>
            </>
          )}

          {/* ================= LAMP ================= */}
          {current.lamp && (
            <button
              className="lamp-btn"
              onClick={() => setLamp(current.lamp)}
            >
              💡
            </button>
          )}

          {/* ================= NAV ================= */}
          <div className="nav-buttons">

            <button
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
            >
              Povratak
            </button>

            {/* ako NIJE zadnje pitanje */}
            {step < steps.length - 1 && (
              <button
                onClick={() => setStep(step + 1)}
                disabled={
                  (current.type === "select" && !answers[current.id]) ||
                  (current.type === "input" && !answers[current.id]) ||
                  (current.type === "multi-select" &&
                    (!answers[current.id] || answers[current.id].length === 0)) ||
                  (current.type === "segment-input" &&
                    (!answers[current.id] ||
                      Object.values(answers[current.id] || {})
                        .flatMap((sentence) => Object.values(sentence || {}))
                        .every((val) => val === ""))) ||
                  (current.type === "group-sort" &&
                    groups[current.id]?.pool?.length > 0)
                }
              >
                Nastavak
              </button>
            )}

            {/* ako je ZADNJE PITANJE */}
            {step === steps.length - 1 && (
              <button
                onClick={() => setFinished(true)}
                disabled={
                  (current.type === "select" && !answers[current.id]) ||
                  (current.type === "input" && !answers[current.id]) ||
                  (current.type === "multi-select" &&
                    (!answers[current.id] || answers[current.id].length === 0)) ||
                  (current.type === "segment-input" &&
                    (!answers[current.id] ||
                      Object.values(answers[current.id] || {})
                        .flatMap((sentence) => Object.values(sentence || {}))
                        .every((val) => val === ""))) ||
                  (current.type === "group-sort" &&
                    groups[current.id]?.pool?.length > 0)
                }
              >
                Završi kviz
              </button>
            )}

          </div>

          {/* FEEDBACK */}
          {finished && (
            <div className="quiz-card" style={{ textAlign: "center" }}>

              <h1 className="glavni-naslov">🎉 Čestitamo!</h1>

              <p className="feedback-message">
                Završili ste kviz.
              </p>

              <p className="feedback-details">
                Vaši odgovori su uspješno zabilježeni.
              </p>

              <button
                className="modal-close"
                onClick={() => setFinished(false)}
              >
                ✕
              </button>

            </div>
          )}

        </div>

        {/* MODAL */}
        {lamp && (
          <div
            className="modal-overlay"
            onClick={() => setLamp(null)}
          >
            <div
              className="modal"
              onClick={(e) => e.stopPropagation()}
            >
              <p>{lamp}</p>

              <button
                className="modal-close"
                onClick={() => setLamp(null)}
              >
                Zatvori
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}