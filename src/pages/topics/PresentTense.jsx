import React from "react";
import { useParams } from "react-router-dom";
import EnglishPresentence from "../Presentence.jsx/EnglishPresentence";
import HindiPresentation from "../Presentence.jsx/HindiPresentation";
import TeluguPresentance from "../Presentence.jsx/TeluguPresentance";
import TamilPresentance from "../Presentence.jsx/TamilPresentance";
import KannandaPresntance from "../Presentence.jsx/KannandaPresntance";

const texts = {
  english: <EnglishPresentence/>,
  hindi: <HindiPresentation/>,
  telugu: <TeluguPresentance/>,
  tamil: <TamilPresentance/>,
  kannada: <KannandaPresntance/>
};

export default function PresentTense() {
  const { lang } = useParams();
  const l = (lang || "english").toLowerCase();
  return (
    <div>
      <h3 className="text-xl font-medium mb-2">Present Tense</h3>
      <h6>{texts[l]}</h6>
    </div>
  );
}
