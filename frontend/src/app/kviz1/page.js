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
        setKviz(data);
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

  const handleSubmit = async () => {
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
        <div key={q._id} className="quiz-card">

          <h2>{q.title || q.question}</h2>

          {q.text && <p className="quiz-text">{q.text}</p>}
          {q.note && <div className="note-box">{q.note}</div>}

          {q.image && (
            <div className="quiz-image">
              <img src={`http://localhost:5000${q.image}`} />
            </div>
          )}

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

          {q.lamp && <div className="lamp-btn">💡 {q.lamp}</div>}

        </div>
      ))}

      {/* BUTTON */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button className="start-quiz-btn2" onClick={handleSubmit}>
          Pohrani moje odgovore
        </button>
      </div>

      {/* MODAL */}
      {submitted && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>🎉 Čestitamo! 🎉</h2>

            <p>Uspješno ste završili kviz.</p>
            <p>Vaši su odgovori uspješno pohranjeni.</p>

            <button
              className="start-quiz-btn"
              onClick={() => setSubmitted(false)}
              style={{ marginTop: "20px" }}
            >
              OK
            </button>
          </div>
        </div>
      )}

    </div>
  );
}