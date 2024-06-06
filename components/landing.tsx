"use client";

import React, { useState } from "react";
import { useEffect } from "react";

export default function Landing() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  const words = ["bedroom", "kitchen", "bathroom", "renovation"];

  const typingSpeed = 100; // Speed for typing and untyping effect
  const pauseTime = 1000; // Pause time after typing and before untyping

  useEffect(() => {
    const word = words[currentWordIndex];
    const totalTypingAndUntypingTime =
      word.length * 2 * typingSpeed + 2 * pauseTime;

    const wordChangeTimer = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex: number) => (prevIndex + 1) % words.length,
      );
    }, totalTypingAndUntypingTime); // Time for typing, untyping and pauses

    return () => clearInterval(wordChangeTimer);
  }, [currentWordIndex]);

  useEffect(() => {
    setTypedText("");
    const word = words[currentWordIndex];
    let typingTimer: number;

    // Typing
    for (let i = 0; i <= word.length; i++) {
      typingTimer = window.setTimeout(() => {
        setTypedText(word.slice(0, i));
      }, i * typingSpeed);
    }

    // Pause after typing
    const pauseAfterTyping = word.length * typingSpeed + pauseTime;

    // Untyping
    for (let j = word.length; j >= 0; j--) {
      typingTimer = window.setTimeout(
        () => {
          setTypedText(word.slice(0, j));
        },
        pauseAfterTyping + (word.length - j) * typingSpeed,
      );
    }

    return () => window.clearTimeout(typingTimer);
  }, [currentWordIndex]);

  return (
    <div>
      <main className="flex flex-1 mb-5 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-3xl font-bold tracking-normal text-gray-800 dark:text-gray-200  sm:text-5xl">
          Inspire your dream
          <br />
          <span>
            <div>
              <span className="relative bg-gradient-text bg-clip-text text-transparent ">
                {typedText}
              </span>
              <span className=" whitespace-nowrap text-gray-700 dark:text-gray-200  ">
                {" "}
                using AI
              </span>
            </div>
          </span>{" "}
        </h1>
      </main>
    </div>
  );
}
