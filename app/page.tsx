"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const searchParams = useSearchParams();
  const nameParam = searchParams.get("name") || "your friend";

  const [step, setStep] = useState(1);
  const [response, setResponse] = useState("");

  const questions = [
    `Is this person ${nameParam}?`,
    "Are you free tomorrow?",
    "Wanna hang out?",
  ];

  const handleYes = () => {
    setResponse("");
    setStep((prev) => prev + 1);
  };

  const handleNo = () => {
    let wittyResponse = "";
    switch (step) {
      case 1:
        wittyResponse = "Oops, identity crisis maybe? 😅";
        break;
      case 2:
        wittyResponse = "Ah, busy bee buzzin' 🐝";
        break;
      case 3:
        wittyResponse = "That's a little sus 👀";
        break;
    }
    setResponse(wittyResponse);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black text-black dark:text-white px-4 text-center">
      <AnimatePresence mode="wait">
        {step <= questions.length && (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-2xl font-bold mb-6">{questions[step - 1]}</h1>
            <div className="flex gap-6 mb-4">
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl"
                onClick={handleYes}
              >
                Yes
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl"
                onClick={handleNo}
              >
                No
              </button>
            </div>
            {response && <p className="text-lg mt-2">{response}</p>}
          </motion.div>
        )}

        {step > questions.length && !response && (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-xl font-semibold mt-4"
          >
            You're the real one 🔥
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
