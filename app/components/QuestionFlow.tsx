"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  name: string;
};

export default function QuestionFlow({ name }: Props) {
  const [step, setStep] = useState(0);
  const [wittyMessage, setWittyMessage] = useState("");

  const questions = [
    `Is this person ${name}?`,
    `Are you free tomorrow?`,
    `Wanna hang out?`,
  ];

  const handleAnswer = (answer: string) => {
    if (step === 0) {
      if (answer === "yes") setStep(1);
      else setWittyMessage("Oops, mistaken identity!");
    } else if (step === 1) {
      if (answer === "yes") setStep(2);
      else setWittyMessage("Busy bee 🐝 Buzz off, I guess?");
    } else if (step === 2) {
      if (answer === "yes") setWittyMessage("Good choice 😎 Let's hang!");
      else setWittyMessage("Understandable... gay.");
    }
  };

  const reset = () => {
    setStep(0);
    setWittyMessage("");
  };

  return (
    <>
      {wittyMessage ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl mb-6">{wittyMessage}</p>
          <button
            onClick={reset}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded-xl"
          >
            Start Over
          </button>
        </motion.div>
      ) : (
        <>
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl max-w-xl text-center mb-8"
          >
            {questions[step]}
          </motion.div>
          <div className="flex space-x-6 justify-center">
            <button
              onClick={() => handleAnswer("yes")}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-xl"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer("no")}
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-xl"
            >
              No
            </button>
          </div>
        </>
      )}
    </>
  );
}
