import React from "react";
import { useParams } from "react-router-dom";
import EnglishGrammar from "../BasicGrammer/EnglishGrammar";
import HindiGrammar from "../BasicGrammer/HindiGrammar";
import TeluguGrammar from "../BasicGrammer/TeluguGrammar";
import TamilGrammar from "../BasicGrammer/TamilGrammar";
import KannadaGrammar from "../BasicGrammer/KannadaGrammar";

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
      <h6>{texts[l]}</h6>
    </div>
  );
}
