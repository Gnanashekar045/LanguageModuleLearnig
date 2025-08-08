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
    hindiTitle: "संज्ञा",
    hindiContent: "संज्ञा व्यक्ति, स्थान, वस्तु या विचार के नाम होते हैं।",
    hindiExamples: [
      "व्यक्ति: डॉक्टर, शिक्षक, एलिस",
      "स्थान: स्कूल, भारत, बाजार",
      "वस्तु: किताब, कार, फोन",
      "विचार: स्वतंत्रता, खुशी, प्यार",
    ],
  },
  {
    title: "Verbs",
    content: "Verbs show action or a state of being.",
    examples: [
      "Action: run, jump, write",
      "State: is, was, are",
    ],
    hindiTitle: "क्रिया",
    hindiContent: "क्रिया किसी कार्य या अवस्था को दर्शाती है।",
    hindiExamples: [
      "कार्य: दौड़ना, कूदना, लिखना",
      "अवस्था: है, था, हैं",
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
    hindiTitle: "विशेषण",
    hindiContent: "विशेषण संज्ञा की विशेषता बताते हैं।",
    hindiExamples: [
      "सुंदर लड़की",
      "ऊँची इमारत",
      "नीला आकाश",
    ],
  },
  {
    title: "Pronouns",
    content: "Pronouns replace nouns in a sentence.",
    examples: [
      "He, she, it, they, we",
      "Ravi is a boy. He is smart.",
    ],
    hindiTitle: "सर्वनाम",
    hindiContent: "सर्वनाम वाक्य में संज्ञा के स्थान पर आते हैं।",
    hindiExamples: [
      "वह, यह, वे, हम",
      "रवि एक लड़का है। वह होशियार है।",
    ],
  },
  {
    title: "Adverbs",
    content: "Adverbs describe verbs, adjectives, or other adverbs.",
    examples: [
      "Quickly, very, silently, well",
      "She sings beautifully.",
    ],
    hindiTitle: "क्रिया विशेषण",
    hindiContent: "क्रिया विशेषण क्रिया, विशेषण या अन्य क्रिया विशेषण की विशेषता बताते हैं।",
    hindiExamples: [
      "तेज़ी से, बहुत, चुपचाप, अच्छी तरह",
      "वह सुंदरता से गाती है।",
    ],
  },
  {
    title: "Prepositions",
    content: "Prepositions show relationships between nouns or pronouns and other words in a sentence.",
    examples: [
      "on, in, under, over",
      "The book is on the table.",
    ],
    hindiTitle: "संबंध सूचक अव्यय",
    hindiContent: "संबंध सूचक अव्यय संज्ञा या सर्वनाम और वाक्य के अन्य शब्दों के बीच संबंध दर्शाते हैं।",
    hindiExamples: [
      "पर, में, नीचे, ऊपर",
      "किताब मेज पर है।",
    ],
  },
  {
    title: "Conjunctions",
    content: "Conjunctions join words, phrases, or clauses.",
    examples: [
      "and, but, or, because",
      "I like tea and coffee.",
    ],
    hindiTitle: "संयोजक",
    hindiContent: "संयोजक शब्दों, वाक्यांशों या उपवाक्यों को जोड़ते हैं।",
    hindiExamples: [
      "और, लेकिन, या, क्योंकि",
      "मुझे चाय और कॉफी पसंद है।",
    ],
  },
  {
    title: "Interjections",
    content: "Interjections express strong emotions or sudden bursts of feeling.",
    examples: [
      "Wow! Oh! Ouch!",
      "Yay! We won the match!",
    ],
    hindiTitle: "विस्मयादिबोधक",
    hindiContent: "विस्मयादिबोधक शब्द तीव्र भावनाओं या अचानक के अनुभव को व्यक्त करते हैं।",
    hindiExamples: [
      "वाह! अरे! आह!",
      "ये! हमने मैच जीत लिया!",
    ],
  },
];

const EnglishGrammar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-purple-50 p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-10">
        <BookText className="inline-block w-8 h-8 mr-2 text-indigo-500" />
        Basic English Grammar – English & Hindi
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
              🔸 {topic.hindiTitle}
            </h2>
            <p className="text-base text-gray-800">{topic.hindiContent}</p>
            <ul className="list-disc list-inside mt-2 text-base text-gray-700">
              {topic.hindiExamples.map((ex, i) => (
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
