'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const questions = [
  {
    question: "Is this person XYZ?",
    yesNext: 1,
    noMessage: "Wrong person! Anyway, you cute though."
  },
  {
    question: "Are you free tomorrow?",
    yesNext: 2,
    noMessage: "Busy people... smh."
  },
  {
    question: "Wanna hang out?",
    yesMessage: "Good girl 😌",
    noMessage: "gay"
  }
]

export default function QuestionFlow() {
  const [step, setStep] = useState(0)
  const [endMessage, setEndMessage] = useState("")

  const handleAnswer = (isYes: boolean) => {
    const current = questions[step]

    if (isYes) {
      if (current.yesNext !== undefined) {
        setStep(current.yesNext)
      } else if (current.yesMessage) {
        setEndMessage(current.yesMessage)
      }
    } else {
      setEndMessage(current.noMessage || "¯\\_(ツ)_/¯")
    }
  }

  return (
    <div className="mt-10 text-center space-y-6 max-w-xl mx-auto">
      {endMessage ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-xl font-semibold bg-white bg-opacity-10 backdrop-blur p-6 rounded-2xl shadow-md"
        >
          {endMessage}
        </motion.div>
      ) : (
        <>
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-medium"
          >
            {questions[step].question}
          </motion.div>
          <div className="flex justify-center gap-6">
            <button
              onClick={() => handleAnswer(true)}
              className="px-5 py-2 bg-green-500 text-white rounded-full hover:scale-105 transition"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="px-5 py-2 bg-red-500 text-white rounded-full hover:scale-105 transition"
            >
              No
            </button>
          </div>
        </>
      )}
    </div>
  )
}
