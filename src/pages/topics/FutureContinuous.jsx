import React from "react";
import { useParams } from "react-router-dom";
import FutureContinuousEn from "../FutureContinuous/FutureContinuousEn";
import FutureContinuousHi from "../FutureContinuous/FutureContinuousHi";
import FutureContinuousTe from "../FutureContinuous/FutureContinuousTe";
import FutureContinuousTa from "../FutureContinuous/FutureContinuousTa";
import FutureContinuousKa from "../FutureContinuous/FutureContinuousKa";




const texts = {
  english: <FutureContinuousEn/>,
  hindi: <FutureContinuousHi/>,
  telugu: <FutureContinuousTe/>,
  tamil: <FutureContinuousTa/>,
  kannada: <FutureContinuousKa/>
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
