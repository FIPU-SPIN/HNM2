"use client";

import { useEffect, useState } from "react";
import Quiz from "../components/Quiz";

export default function Page() {
  const [kviz, setKviz] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/quiz/kviz2")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => a.order - b.order);

        setKviz(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Greška:", err);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (answers) => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch("http://localhost:5000/api/quizRez", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        quizId: "kviz2",
        answers,
      }),
    });

    const data = await res.json();
    console.log("Rezultat spremljen:", data);
    } catch (err) {
      console.error("Greška pri slanju:", err);
    }
  };

  if (loading) {
    return <p>Učitavanje kviza...</p>;
  }

  return <Quiz steps={kviz} onSubmit={handleSubmit} />;
}