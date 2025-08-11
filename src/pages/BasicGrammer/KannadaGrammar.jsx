import React from "react";
import { BookText } from "lucide-react";

const grammarTopics = [
  {
    title: "Nouns",
    content: "Nouns are names of people, places, things, or ideas.",
    examples: [
      "Person: doctor, teacher, Alice",
      "Place: school, India, market",
      "Thing: book, car, phone",
      "Idea: freedom, happiness, love",
    ],
    kannadaTitle: "ನಾಮಪದಗಳು",
    kannadaContent: "ನಾಮಪದಗಳು ವ್ಯಕ್ತಿ, ಸ್ಥಳ, ವಸ್ತು ಅಥವಾ ಕಲ್ಪನೆಯ ಹೆಸರಾಗಿವೆ.",
    kannadaExamples: [
      "ವ್ಯಕ್ತಿ: ವೈದ್ಯ, ಶಿಕ್ಷಕ, ಅಲಿಸ್",
      "ಸ್ಥಳ: ಶಾಲೆ, ಭಾರತ, ಮಾರುಕಟ್ಟೆ",
      "ವಸ್ತು: ಪುಸ್ತಕ, ಕಾರು, ಫೋನ್",
      "ಕಲ್ಪನೆ: ಸ್ವಾತಂತ್ರ್ಯ, ಸಂತೋಷ, ಪ್ರೀತಿ",
    ],
  },
  {
    title: "Verbs",
    content: "Verbs show action or a state of being.",
    examples: [
      "Action: run, jump, write",
      "State: is, was, are",
    ],
    kannadaTitle: "ಕ್ರಿಯಾಪದಗಳು",
    kannadaContent: "ಕ್ರಿಯಾಪದಗಳು ಕ್ರಿಯೆಯನ್ನು ಅಥವಾ ಸ್ಥಿತಿಯನ್ನು ತೋರಿಸುತ್ತವೆ.",
    kannadaExamples: [
      "ಕ್ರಿಯೆ: ಓಡು, ಜಿಗು, ಬರೆಯು",
      "ಸ್ಥಿತಿ: ಇದೆ, ಇತ್ತು, ಇವೆ",
    ],
  },
  {
    title: "Adjectives",
    content: "Adjectives describe or modify nouns.",
    examples: [
      "Beautiful girl",
      "Tall building",
      "Blue sky",
    ],
    kannadaTitle: "ಗುಣವಾಚಕಗಳು",
    kannadaContent: "ಗುಣವಾಚಕಗಳು ನಾಮಪದಗಳನ್ನು ವಿವರಿಸುತ್ತವೆ ಅಥವಾ ಬದಲಿಸುತ್ತವೆ.",
    kannadaExamples: [
      "ಸುಂದರ ಹುಡುಗಿ",
      "ಎತ್ತದ ಕಟ್ಟಡ",
      "ನೀಲಾ ಆಕಾಶ",
    ],
  },
  {
    title: "Pronouns",
    content: "Pronouns replace nouns in a sentence.",
    examples: [
      "He, she, it, they, we",
      "Ravi is a boy. He is smart.",
    ],
    kannadaTitle: "ಸರ್ವನಾಮಗಳು",
    kannadaContent: "ಸರ್ವನಾಮಗಳು ವಾಕ್ಯದಲ್ಲಿ ನಾಮಪದಗಳ ಬದಲಿಗೆ ಬರುತ್ತವೆ.",
    kannadaExamples: [
      "ಅವನು, ಅವಳು, ಅದು, ಅವರು, ನಾವು",
      "ರವಿಗೆ ಹುಡುಗನು. ಅವನು ಚತುರ.",
    ],
  },
  {
    title: "Adverbs",
    content: "Adverbs describe verbs, adjectives, or other adverbs.",
    examples: [
      "Quickly, very, silently, well",
      "She sings beautifully.",
    ],
    kannadaTitle: "ಕ್ರಿಯಾವಿಶೇಷಣಗಳು",
    kannadaContent: "ಕ್ರಿಯಾವಿಶೇಷಣಗಳು ಕ್ರಿಯೆ, ಗುಣವಾಚಕ ಅಥವಾ ಇತರ ಕ್ರಿಯಾವಿಶೇಷಣಗಳನ್ನು ವಿವರಿಸುತ್ತವೆ.",
    kannadaExamples: [
      "ಶೀಘ್ರವಾಗಿ, ಬಹುಪಾಲು, ಮೌನವಾಗಿ, ಚೆನ್ನಾಗಿ",
      "ಅವಳು ಸುಂದರವಾಗಿ ಹಾಡುತ್ತಾಳೆ.",
    ],
  },
  {
    title: "Prepositions",
    content: "Prepositions show relationships between nouns or pronouns and other words in a sentence.",
    examples: [
      "on, in, under, over",
      "The book is on the table.",
    ],
    kannadaTitle: "ಸಂಬಂಧ ಸೂಚಕಗಳು",
    kannadaContent: "ಸಂಬಂಧ ಸೂಚಕಗಳು ನಾಮಪದ ಅಥವಾ ಸರ್ವನಾಮ ಮತ್ತು ಇತರ ಪದಗಳ ನಡುವಿನ ಸಂಬಂಧವನ್ನು ತೋರಿಸುತ್ತವೆ.",
    kannadaExamples: [
      "ಮೇಲೆ, ಒಳಗೆ, ಕೆಳಗೆ, ಮೇಲ್ಭಾಗದಲ್ಲಿ",
      "ಪುಸ್ತಕವು ಮೇಜಿನ ಮೇಲಿದೆ.",
    ],
  },
  {
    title: "Conjunctions",
    content: "Conjunctions join words, phrases, or clauses.",
    examples: [
      "and, but, or, because",
      "I like tea and coffee.",
    ],
    kannadaTitle: "ಸಂಯೋಜಕಗಳು",
    kannadaContent: "ಸಂಯೋಜಕಗಳು ಪದಗಳು, ವಾಕ್ಯাংশಗಳು ಅಥವಾ ಉಪವಾಕ್ಯಗಳನ್ನು ಸಂಪರ್ಕಿಸುತ್ತವೆ.",
    kannadaExamples: [
      "ಮತ್ತು, ಆದರೆ, ಅಥವಾ, ಏಕೆಂದರೆ",
      "ನನಗೆ ಚಹಾ ಮತ್ತು ಕಾಫಿ ಇಷ್ಟ.",
    ],
  },
  {
    title: "Interjections",
    content: "Interjections express strong emotions or sudden bursts of feeling.",
    examples: [
      "Wow! Oh! Ouch!",
      "Yay! We won the match!",
    ],
    kannadaTitle: "ವಿಸ್ಮಯಾದಿಬೋಧಕಗಳು",
    kannadaContent: "ವಿಸ್ಮಯಾದಿಬೋಧಕಗಳು ತೀವ್ರ ಭಾವನೆಗಳನ್ನು ಅಥವಾ ಅಚಾನಕ ಭಾವನಾತ್ಮಕ ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ವ್ಯಕ್ತಪಡಿಸುತ್ತವೆ.",
    kannadaExamples: [
      "ಅಯ್ಯೋ! ಅರೆ! ಬಹಳ ಚಂದ!",
      "ಅಹಾ! ನಾವು ಪಂದ್ಯವನ್ನು ಗೆದ್ದೆವು!",
    ],
  },
];

const EnglishGrammar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-purple-50 p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-10">
        <BookText className="inline-block w-8 h-8 mr-2 text-indigo-500" />
        Basic English Grammar – English & Kannada
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {grammarTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              🔹 {topic.title}
            </h2>
            <p className="text-base text-gray-800">{topic.content}</p>
            <ul className="list-disc list-inside mt-2 text-base text-gray-700">
              {topic.examples.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>

            <hr className="my-4" />

            <h2 className="text-xl font-semibold text-green-700 mb-2">
              🔸 {topic.kannadaTitle}
            </h2>
            <p className="text-base text-gray-800">{topic.kannadaContent}</p>
            <ul className="list-disc list-inside mt-2 text-base text-gray-700">
              {topic.kannadaExamples.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnglishGrammar;
