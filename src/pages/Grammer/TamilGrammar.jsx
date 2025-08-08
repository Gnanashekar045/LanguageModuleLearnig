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
    tamilTitle: "பெயர்ச்சொற்கள்",
    tamilContent: "பெயர்ச்சொற்கள் என்பது أش اشخاص, இடங்கள், பொருட்கள் அல்லது கருத்துகளின் பெயர்கள் ஆகும்.",
    tamilExamples: [
      "நபர்: மருத்துவர், ஆசிரியர், ஆலிஸ்",
      "இடம்: பள்ளி, இந்தியா, சந்தை",
      "பொருள்: புத்தகம், கார், தொலைபேசி",
      "கருத்து: சுதந்திரம், மகிழ்ச்சி, அன்பு",
    ],
  },
  {
    title: "Verbs",
    content: "Verbs show action or a state of being.",
    examples: ["Action: run, jump, write", "State: is, was, are"],
    tamilTitle: "வினைச்சொற்கள்",
    tamilContent: "வினைச்சொற்கள் ஒரு செயலையோ அல்லது நிலையை காட்டுகின்றன.",
    tamilExamples: ["செயல்: ஓடு, தாவு, எழுது", "நிலை: இருக்கிறது, இருந்தது, உள்ளன"],
  },
  {
    title: "Adjectives",
    content: "Adjectives describe or modify nouns.",
    examples: ["Beautiful girl", "Tall building", "Blue sky"],
    tamilTitle: "வணணச்சொற்கள்",
    tamilContent: "வணணச்சொற்கள் பெயர்ச்சொற்களை விவரிக்கின்றன அல்லது மாற்றுகின்றன.",
    tamilExamples: ["அழகான பெண்", "உயரமான கட்டிடம்", "நீல வானம்"],
  },
  {
    title: "Pronouns",
    content: "Pronouns replace nouns in a sentence.",
    examples: ["He, she, it, they, we", "Ravi is a boy. He is smart."],
    tamilTitle: "புனைபெயர்ச்சொற்கள்",
    tamilContent: "புனைபெயர்ச்சொற்கள் ஒரு பெயர்ச்சொல்லை மாற்றி அதற்குப் பதிலாக பயன்படுத்தப்படுகின்றன.",
    tamilExamples: ["அவர், அவள், இது, அவர்கள், நாம்", "ரவிகுமார் ஒரு சிறுவன். அவர் புத்திசாலி."],
  },
  {
    title: "Adverbs",
    content: "Adverbs describe verbs, adjectives, or other adverbs.",
    examples: ["Quickly, very, silently, well", "She sings beautifully."],
    tamilTitle: "வினையிச்சொற்கள்",
    tamilContent: "வினையிச்சொற்கள் வினைச்சொற்கள், வணணச்சொற்கள் அல்லது மற்ற வினையிச்சொற்களை விவரிக்கின்றன.",
    tamilExamples: ["விரைவாக, மிகவும், அமைதியாக, நன்றாக", "அவள் அழகாக பாடுகிறாள்."],
  },
  {
    title: "Prepositions",
    content: "Prepositions show relationships between nouns or pronouns and other words in a sentence.",
    examples: ["on, in, under, over", "The book is on the table."],
    tamilTitle: "முன்னிலைச் சொற்கள்",
    tamilContent: "முன்னிலைச் சொற்கள் பெயர்ச்சொல் அல்லது புனைபெயர்ச்சொல் மற்றும் மற்ற சொற்கள் இடையே உறவை காட்டுகின்றன.",
    tamilExamples: ["மேல், உள்ளே, கீழே, மேலே", "புத்தகம் மேசையில் உள்ளது."],
  },
  {
    title: "Conjunctions",
    content: "Conjunctions join words, phrases, or clauses.",
    examples: ["and, but, or, because", "I like tea and coffee."],
    tamilTitle: "இணைப்புச்சொற்கள்",
    tamilContent: "இணைப்புச்சொற்கள் சொற்கள், சொற்றொடர்கள் அல்லது துணைவாக்கியங்களை இணைக்கின்றன.",
    tamilExamples: ["மற்றும், ஆனால், அல்லது, ஏனெனில்", "எனக்கு தேனீர் மற்றும் காபி பிடிக்கும்."],
  },
  {
    title: "Interjections",
    content: "Interjections express strong emotions or sudden bursts of feeling.",
    examples: ["Wow! Oh! Ouch!", "Yay! We won the match!"],
    tamilTitle: "உடனடி ஒலிகள்",
    tamilContent: "உடனடி ஒலிகள் சக்திவாய்ந்த உணர்வுகள் அல்லது திடீர் உணர்ச்சிகளை வெளிப்படுத்துகின்றன.",
    tamilExamples: ["அருவாய்! ஐயோ! ஐயையோ!", "வாழ்த்துகள்! நாம் போட்டியை வென்றோம்!"],
  },
];

const EnglishGrammar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-purple-50 p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-10">
        <BookText className="inline-block w-8 h-8 mr-2 text-indigo-500" />
        Basic English Grammar – English & Tamil
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

            <h2 className="text-xl font-semibold text-pink-700 mb-2">
              🔸 {topic.tamilTitle}
            </h2>
            <p className="text-base text-gray-800">{topic.tamilContent}</p>
            <ul className="list-disc list-inside mt-2 text-base text-gray-700">
              {topic.tamilExamples.map((ex, i) => (
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
