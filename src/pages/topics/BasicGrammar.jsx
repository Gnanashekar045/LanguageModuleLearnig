import React from "react";
import { useParams } from "react-router-dom";
import EnglishGrammar from "../Grammer/EnglishGrammar";
import HindiGrammar from "../Grammer/HindiGrammar";
import TeluguGrammar from "../Grammer/TeluguGrammar";
import TamilGrammar from "../Grammer/TamilGrammar";
import KannadaGrammar from "../Grammer/KannadaGrammar";

const texts = {
  english: <EnglishGrammar/>,
  hindi: <HindiGrammar/>,
  telugu: <TeluguGrammar/>,
  tamil: <TamilGrammar/>,
  kannada: <KannadaGrammar/>
};


export default function BasicGrammar() {
  const { lang } = useParams();
  const l = (lang || "english").toLowerCase();
  return (
    <div>
      <h3 className="text-xl font-medium mb-2">Basic Grammar</h3>
      <p>{texts[l]}</p>
    </div>
  );
}
