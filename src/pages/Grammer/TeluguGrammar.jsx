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
    teluguTitle: "నామవాచకాలు",
    teluguContent: "నామవాచకాలు వ్యక్తులు, ప్రదేశాలు, వస్తువులు లేదా భావనలు యొక్క పేర్లు.",
    teluguExamples: [
      "వ్యక్తి: డాక్టర్, టీచర్, అలీస్",
      "ప్రదేశం: పాఠశాల, ఇండియా, మార్కెట్",
      "వస్తువు: పుస్తకం, కారు, ఫోన్",
      "భావన: స్వేచ్ఛ, ఆనందం, ప్రేమ",
    ],
  },
  {
    title: "Verbs",
    content: "Verbs show action or a state of being.",
    examples: ["Action: run, jump, write", "State: is, was, are"],
    teluguTitle: "క్రియలు",
    teluguContent: "క్రియలు ఒక చర్య లేదా స్థితిని సూచిస్తాయి.",
    teluguExamples: ["చర్య: పరుగెత్తు, దూకు, వ్రాయు", "స్థితి: ఉంది, ఉంది, ఉన్నారు"],
  },
  {
    title: "Adjectives",
    content: "Adjectives describe or modify nouns.",
    examples: ["Beautiful girl", "Tall building", "Blue sky"],
    teluguTitle: "విశేషణాలు",
    teluguContent: "విశేషణాలు నామవాచకాలను వివరిస్తాయి లేదా మార్చుతాయి.",
    teluguExamples: ["అందమైన అమ్మాయి", "పొడవాటి భవనం", "నీలి ఆకాశం"],
  },
  {
    title: "Pronouns",
    content: "Pronouns replace nouns in a sentence.",
    examples: ["He, she, it, they, we", "Ravi is a boy. He is smart."],
    teluguTitle: "సర్వనామాలు",
    teluguContent: "సర్వనామాలు వాక్యంలో నామవాచకాల స్థానంలో వస్తాయి.",
    teluguExamples: ["అతను, ఆమె, ఇది, వారు, మనము", "రవి ఒక అబ్బాయి. అతను తెలివైనవాడు."],
  },
  {
    title: "Adverbs",
    content: "Adverbs describe verbs, adjectives, or other adverbs.",
    examples: ["Quickly, very, silently, well", "She sings beautifully."],
    teluguTitle: "క్రియా విశేషణాలు",
    teluguContent: "క్రియా విశేషణాలు క్రియలు, విశేషణాలు లేదా ఇతర క్రియా విశేషణాలను వివరిస్తాయి.",
    teluguExamples: ["వేగంగా, చాలా, నిశ్శబ్దంగా, బాగా", "ఆమె అందంగా పాడుతుంది."],
  },
  {
    title: "Prepositions",
    content: "Prepositions show relationships between nouns or pronouns and other words in a sentence.",
    examples: ["on, in, under, over", "The book is on the table."],
    teluguTitle: "విభక్తి ప్రత్యయాలు",
    teluguContent: "విభక్తి ప్రత్యయాలు నామవాచకాలు లేదా సర్వనామాల మధ్య సంబంధాన్ని చూపిస్తాయి.",
    teluguExamples: ["పై, లో, కింద, మీద", "పుస్తకం మెజపై ఉంది."],
  },
  {
    title: "Conjunctions",
    content: "Conjunctions join words, phrases, or clauses.",
    examples: ["and, but, or, because", "I like tea and coffee."],
    teluguTitle: "సంధులు",
    teluguContent: "సంధులు పదాలు, పదబంధాలు లేదా ఉపవాక్యాలను కలుపుతాయి.",
    teluguExamples: ["మరియు, కానీ, లేదా, ఎందుకంటే", "నాకు టీ మరియు కాఫీ ఇష్టం."],
  },
  {
    title: "Interjections",
    content: "Interjections express strong emotions or sudden bursts of feeling.",
    examples: ["Wow! Oh! Ouch!", "Yay! We won the match!"],
    teluguTitle: "విస్మయాదిబోధకాలు",
    teluguContent: "విస్మయాదిబోధకాలు తీవ్రమైన భావోద్వేగాలు లేదా అకస్మాత్తుగా వచ్చిన భావాలను వ్యక్తపరుస్తాయి.",
    teluguExamples: ["అదిరింది! ఓ! అయ్యో!", "బాగుంది! మేము మ్యాచ్ గెలిచాం!"],
  },
];

const TeluguGrammar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-50 via-white to-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-10">
        <BookText className="inline-block w-8 h-8 mr-2 text-purple-500" />
        Basic English Grammar – English & Telugu
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
              🔸 {topic.teluguTitle}
            </h2>
            <p className="text-base text-gray-800">{topic.teluguContent}</p>
            <ul className="list-disc list-inside mt-2 text-base text-gray-700">
              {topic.teluguExamples.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeluguGrammar;