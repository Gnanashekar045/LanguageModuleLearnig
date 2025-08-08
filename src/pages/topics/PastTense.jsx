import React from "react";
import { useParams } from "react-router-dom";
import EnglishPastTense from "../PastTenseGammer/EnglishPastTense";
import HindiPastTense from "../PastTenseGammer/HindiPastTense";
import TeluguPastTense from "../PastTenseGammer/TeluguPastTense";
import TamilPastTense from "../PastTenseGammer/TamilPastTense";
import KannadaPastTense from "../PastTenseGammer/KannadaPastTense";

const texts = {
  english: <EnglishPastTense/>,
  hindi: <HindiPastTense/>,
  telugu: <TeluguPastTense/>,
  tamil: <TamilPastTense/>,
  kannada: <KannadaPastTense/>
};

export default function PastTense() {
  const { lang } = useParams();
  const l = (lang || "english").toLowerCase();
  return (
    <div>
      <h3 className="text-xl font-medium mb-2">Past Tense</h3>
      <p>{texts[l]}</p>
    </div>
  );
}
