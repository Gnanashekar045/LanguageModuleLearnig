import React from "react";
import { useParams } from "react-router-dom";
import FuturePerfectEn from "../FuturePerfect/FuturePerfectEn";
import FuturePerfectHi from "../FuturePerfect/FuturePerfectHi";
import FuturePerfectTe from "../FuturePerfect/FuturePerfectTe";
import FuturePerfectTa from "../FuturePerfect/FuturePerfectTa";
import FuturePerfectKa from "../FuturePerfect/FuturePerfectKa";





const texts = {
  english: <FuturePerfectEn/>,
  hindi: <FuturePerfectHi/>,
  telugu: <FuturePerfectTe/>,
  tamil: <FuturePerfectTa/>,
  kannada: <FuturePerfectKa/>
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
