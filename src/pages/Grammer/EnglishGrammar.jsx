import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  PenLine,
  ListChecks,
  Quote,
  TextCursorInput,
  Landmark,
  Timer,
  Settings,
  Volume2,
} from "lucide-react";

const grammarTopics = [
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: "Nouns",
    content: (
      <>
        <p>Nouns are names of people, places, things, or ideas.</p>
        <ul className="list-disc list-inside mt-2 text-base text-gray-700">
          <li>Person: doctor, teacher, Alice</li>
          <li>Place: school, India, market</li>
          <li>Thing: book, car, phone</li>
          <li>Idea: freedom, happiness, love</li>
        </ul>
      </>
    ),
  },
  {
    icon: <PenLine className="w-6 h-6 text-green-600" />,
    title: "Pronouns",
    content: (
      <>
        <p>Pronouns replace nouns to avoid repetition.</p>
        <ul className="list-disc list-inside mt-2 text-base text-gray-700">
          <li>He is tall. (instead of "John is tall")</li>
          <li>They are coming. (instead of "The boys are coming")</li>
          <li>She loves her dog.</li>
          <li>Types: I, me, you, we, him, her, it, they, ours</li>
        </ul>
      </>
    ),
  },
  {
    icon: <ListChecks className="w-6 h-6 text-purple-600" />,
    title: "Verbs",
    content: (
      <>
        <p>Verbs express actions or states of being.</p>
        <ul className="list-disc list-inside mt-2 text-base text-gray-700">
          <li>She <b>runs</b> fast.</li>
          <li>We <b>are</b> happy.</li>
          <li>He <b>ate</b> lunch.</li>
          <li>I <b>have written</b> a letter.</li>
          <li>They <b>will go</b> tomorrow.</li>
        </ul>
      </>
    ),
  },
  {
    icon: <Quote className="w-6 h-6 text-pink-600" />,
    title: "Adjectives",
    content: (
      <>
        <p>Adjectives describe or modify nouns.</p>
        <ul className="list-disc list-inside mt-2 text-base text-gray-700">
          <li>A <b>beautiful</b> flower</li>
          <li>An <b>old</b> man</li>
          <li>The <b>red</b> car</li>
          <li>A <b>large</b> room</li>
          <li>A <b>brilliant</b> idea</li>
        </ul>
      </>
    ),
  },
  {
    icon: <Volume2 className="w-6 h-6 text-red-500" />,
    title: "Adverbs",
    content: (
      <>
        <p>Adverbs modify verbs, adjectives, or other adverbs.</p>
        <ul className="list-disc list-inside mt-2 text-base text-gray-700">
          <li>She speaks <b>softly</b>.</li>
          <li>He ran <b>very fast</b>.</li>
          <li>They arrived <b>late</b>.</li>
          <li>I <b>completely</b> understand.</li>
        </ul>
      </>
    ),
  },
  {
    icon: <Landmark className="w-6 h-6 text-yellow-500" />,
    title: "Prepositions",
    content: (
      <>
        <p>Prepositions show the relationship between words.</p>
        <ul className="list-disc list-inside mt-2 text-base text-gray-700">
          <li>The book is <b>on</b> the table.</li>
          <li>She sat <b>under</b> the tree.</li>
          <li>We’ll go <b>after</b> dinner.</li>
          <li>He walked <b>into</b> the room.</li>
        </ul>
      </>
    ),
  },
  {
    icon: <Settings className="w-6 h-6 text-cyan-600" />,
    title: "Conjunctions",
    content: (
      <>
        <p>Conjunctions connect words or clauses.</p>
        <ul className="list-disc list-inside mt-2 text-base text-gray-700">
          <li>I like coffee <b>and</b> tea.</li>
          <li>She is tired <b>but</b> happy.</li>
          <li>We stayed home <b>because</b> it rained.</li>
          <li><b>Either</b> you go, <b>or</b> I will.</li>
        </ul>
      </>
    ),
  },
  {
    icon: <TextCursorInput className="w-6 h-6 text-amber-700" />,
    title: "Articles",
    content: (
      <>
        <p>Articles define nouns as specific or non-specific.</p>
        <ul className="list-disc list-inside mt-2 text-base text-gray-700">
          <li>I saw <b>a</b> cat.</li>
          <li>She found <b>an</b> umbrella.</li>
          <li><b>The</b> sun rises in the east.</li>
          <li><b>A</b> dog is barking outside.</li>
        </ul>
      </>
    ),
  },
  {
    icon: <Timer className="w-6 h-6 text-indigo-600" />,
    title: "Tenses",
    content: (
      <>
        <p>Tenses show when an action happens.</p>
        <ul className="list-disc list-inside mt-2 text-base text-gray-700">
          <li><b>Present:</b> I walk, I am walking</li>
          <li><b>Past:</b> I walked, I was walking</li>
          <li><b>Future:</b> I will walk, I will be walking</li>
          <li><b>Perfect:</b> I have walked, I had walked</li>
        </ul>
      </>
    ),
  },
];

const AccordionItem = ({ icon, title, content, isOpen, onClick }) => (
  <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
    <button
      className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 text-left">
        {icon}
        <span className="font-semibold text-lg text-gray-800">{title}</span>
      </div>
      <span className="text-xl text-gray-500">{isOpen ? "−" : "+"}</span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-5 pb-4 text-gray-700 text-base">{content}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const EnglishGrammar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-purple-50 p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-10">
        📘 Basic English Grammar Guide
      </h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {grammarTopics.map((topic, index) => (
          <AccordionItem
            key={index}
            icon={topic.icon}
            title={topic.title}
            content={topic.content}
            isOpen={openIndex === index}
            onClick={() => toggleIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EnglishGrammar;
