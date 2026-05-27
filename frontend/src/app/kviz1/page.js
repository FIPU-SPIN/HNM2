"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [kviz, setKviz] = useState([]);
  const [loading, setLoading] = useState(true);

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/quiz/kviz1")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => a.order - b.order);
        setKviz(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const setAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const isQuestionAnswered = (q) => {
    if (!q.id) return true; // intro i audio blokovi
    return answers[q.id] !== undefined;
  };

  const allAnswered = kviz
    .filter((q) => q.id)
    .every((q) => isQuestionAnswered(q));

  const handleSubmit = async () => {
    if (!allAnswered) return;

    try {
      await fetch("http://localhost:5000/api/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quizId: "kviz1",
          answers,
        }),
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Učitavanje kviza...</p>;

  return (
    <div className="quiz-page">

      {kviz.map((q) => (
        <div
          key={q._id}
          className={`quiz-card ${q.type === "intro" ? "intro-card" : ""}`}
        >

          {/* INTRO LAYOUT */}
          {q.type === "intro" ? (
            <>
              <h1>{q.title}</h1>

              {q.image && (
                <div className="quiz-image">
                  <img src={`http://localhost:5000${q.image}`} />
                </div>
              )}

              {q.text && <p className="quiz-text">{q.text}</p>}
              {q.note && <div className="note-box">{q.note}</div>}
            </>
          ) : (
            <>
              <h2>{q.title || q.question}</h2>

              {q.text && <p className="quiz-text">{q.text}</p>}
              {q.note && <div className="note-box">{q.note}</div>}
            </>
          )}

          {/* OPTIONS */}
          {q.options?.length > 0 && (
            <div className="options-grid">
              {q.options.map((o, i) => (
                <button
                  key={i}
                  className={`option-pill ${
                    answers[q.id] === o ? "active" : ""
                  }`}
                  onClick={() => setAnswer(q.id, o)}
                >
                  {o}
                </button>
              ))}
            </div>
          )}

          {/* VOICES */}
          {q.voices?.length > 0 && (
            <div className="audio-grid">
              {q.voices.map((v, i) => (
                <div key={i} className="audio-item">
                  <p>{v.label}</p>
                  <audio
                    controls
                    src={`http://localhost:5000/audio/${v.audio}`}
                  />
                </div>
              ))}
            </div>
          )}

          {/* ZVUKOVI */}
          {q.zvukovi?.length > 0 && (
            <div className="audio-grid">
              {q.zvukovi.map((z, i) => (
                <div key={i} className="audio-item">
                  <p>{z.label}</p>
                  <audio
                    controls
                    src={`http://localhost:5000/audio/${z.audio}`}
                  />
                </div>
              ))}
            </div>
          )}

          {/* LAMP */}
          {q.lamp && <div className="lamp-btn">💡 {q.lamp}</div>}

        </div>
      ))}

      {/* BUTTON */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          className="start-quiz-btn"
          disabled={!allAnswered}
          onClick={handleSubmit}
        >
          SPREMI KVIZ
        </button>
      </div>

      {/* MODAL */}
      {submitted && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>🎉 Čestitamo! 🎉</h2>

            <p>Uspješno ste riješili kviz o naglasnim sustavima.</p>
            <p>Vaši odgovori su spremljeni.</p>

            <button
              className="start-quiz-btn"
              onClick={() => {
                setSubmitted(false);
                setAnswers({});
              }}
            >
              Zatvori
            </button>
          </div>
        </div>
      )}

    </div>
  );
}