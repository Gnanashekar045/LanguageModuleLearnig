import React from "react";
import { useParams } from "react-router-dom";
import FuturePerfectContinuousEn from "../FuturePerfectContinuous/FuturePerfectContinuousEn";
import FuturePerfectContinuousHi from "../FuturePerfectContinuous/FuturePerfectContinuousHi";
import FuturePerfectContinuousTe from "../FuturePerfectContinuous/FuturePerfectContinuousTe";
import FuturePerfectContinuousTa from "../FuturePerfectContinuous/FuturePerfectContinuousTa";
import FuturePerfectContinuousKa from "../FuturePerfectContinuous/FuturePerfectContinuousKa";





const texts = {
  english: <FuturePerfectContinuousEn/>,
  hindi: <FuturePerfectContinuousHi/>,
  telugu: <FuturePerfectContinuousTe/>,
  tamil: <FuturePerfectContinuousTa/>,
  kannada: <FuturePerfectContinuousKa/>
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
