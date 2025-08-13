import React from "react";
import { useParams } from "react-router-dom";
import PastContinuousEn from "../PastContinuous/PastContinuousEn";
import PastContinuousHi from "../PastContinuous/PastContinuousHi";
import PastContinuousTe from "../PastContinuous/PastContinuousTe";
import PastContinuousTa from "../PastContinuous/PastContinuousTa";
import PastContinuousKa from "../PastContinuous/PastContinuousKa";




const texts = {
  english: <PastContinuousEn/>,
  hindi: <PastContinuousHi/>,
  telugu: <PastContinuousTe/>,
  tamil: <PastContinuousTa/>,
  kannada: <PastContinuousKa/>
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
