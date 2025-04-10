"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QuestionFlow = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "XYZ";

  const questions = [
    {
      question: `Is this person ${name}?`,
      yes: "Nice, moving on...",
      no: "Wrong person? Lmao. Reload and try again.",
    },
    {
      question: "Are you free tomorrow?",
      yes: "Yessirrr let's goo...",
      no: "Busy people 🧠, I get it.",
    },
    {
      question: "Wanna hang out?",
      yes: "Good girl 😎",
      no: "gay 💀",
    },
  ];

  const [step, setStep] = useState(0);
  const [showWitty, setShowWitty] = useState(false);
  const [wittyResponse, setWittyResponse] = useState("");

  const handleAnswer = (answer: "yes" | "no") => {
    const response = questions[step][answer];
    if (answer === "yes") {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        setWittyResponse("All questions answered! 🥳");
        setShowWitty(true);
      }
    } else {
      setWittyResponse(response);
      setShowWitty(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <AnimatePresence mode="wait">
        {!showWitty ? (
          <motion.div
            key={`question-${step}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-6">{questions[step].question}</h2>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleAnswer("yes")}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl"
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer("no")}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl"
              >
                No
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="witty"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-pink-500">{wittyResponse}</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionFlow;
