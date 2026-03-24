"use client";
import { useState } from "react";

export default function Quiz() {
  const questions = [
    { question: "Riječ: glȃva", correct: "dugosilazni" },
    { question: "Riječ: vòda", correct: "kratkouzlazni" },
    { question: "Riječ: rȍditelj", correct: "kratkosilazni" }
  ];

  const [step, setStep] = useState("intro"); // intro | ready | quiz | result
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleAnswer = (answer) => {
    const correct = questions[currentQuestion].correct;

    if (answer === correct) {
      setFeedback("✅ Točno!");
      setScore(score + 1);
    } else {
      setFeedback(`❌ Netočno — točan odgovor je: ${correct}`);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setFeedback("");
      } else {
        setStep("result");
      }
    }, 1200);
  };

  const restartQuiz = () => {
    setStep("intro");
    setCurrentQuestion(0);
    setScore(0);
    setFeedback("");
  };

  const total = questions.length;
  const percent = Math.round((score / total) * 100);

  let message = "";
  let emoji = "";

  if (percent === 100) {
    message = "Savršeno! Naglasci su ti jača strana 😎";
    emoji = "🏆";
  } else if (percent >= 70) {
    message = "Odlično ti ide! Još malo i to je to! 👏";
    emoji = "✨";
  } else if (percent >= 40) {
    message = "Dobro ti ide, ali trebaš još malo vježbe 🙂";
    emoji = "🎧";
  } else {
    message = "Nema veze, svaki pokušaj je mali napredak 💪";
    emoji = "📘";
  }

  return (
    <div>
      {step === "intro" && (
        <div className="quiz-intro">
          <h2 className="kviz">Pogodi naglasak</h2>
          <p>
            U ovom kratkom kvizu provjerit ćeš možeš li prepoznati
            hrvatske naglaske u riječima.
          </p>
          <button onClick={() => setStep("ready")}>Započni</button>
        </div>
      )}

      {step === "ready" && (
        <div className="quiz-intro">
          <h2>🎧 Jeste li spremni?</h2>
          <p>
            Čekaju te <strong>3 pitanja</strong>.
          </p>
          <button onClick={() => setStep("quiz")}>Krenimo!</button>
        </div>
      )}

      {step === "quiz" && (
        <div id="quiz">
          <p id="question">
            {questions[currentQuestion].question}
          </p>

          <div id="answers">
            <button onClick={() => handleAnswer("kratkosilazni")}>
              <b>Kratkosilazni</b>
            </button>
            <button onClick={() => handleAnswer("kratkouzlazni")}>
              <b>Kratkouzlazni</b>
            </button>
            <button onClick={() => handleAnswer("dugosilazni")}>
              <b>Dugosilazni</b>
            </button>
            <button onClick={() => handleAnswer("dugouzlazni")}>
              <b>Dugouzlazni</b>
            </button>
          </div>

          <p id="feedback">{feedback}</p>
          <p id="progress">
            Pitanje {currentQuestion + 1} / {total}
          </p>
        </div>
      )}

      {step === "result" && (
        <div className="result-box">
          <div className="result-emoji">{emoji}</div>
          <h2>🎉 Kviz završen!</h2>
          <p>Osvojio/la si {score} / {total} boda.</p>
          <p>{message}</p>

          <button id="retry" onClick={restartQuiz}>
            Igraj ponovno 🔁
          </button>
        </div>
      )}
    </div>
  );
}