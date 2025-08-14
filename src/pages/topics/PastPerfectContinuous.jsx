import React from "react";
import { useParams } from "react-router-dom";
import PastPerfectContinuousEn from "../PastPerfectContinuous/PastPerfectContinuousEn";
import PastPerfectContinuousHi from "../PastPerfectContinuous/PastPerfectContinuousHi";
import PastPerfectContinuousTe from "../PastPerfectContinuous/PastPerfectContinuousTe";
import PastPerfectContinuousTa from "../PastPerfectContinuous/PastPerfectContinuousTa";
import PastPerfectContinuousKa from "../PastPerfectContinuous/PastPerfectContinuousKa";


const texts = {
  english: <PastPerfectContinuousEn/>,
  hindi: <PastPerfectContinuousHi/>,
  telugu: <PastPerfectContinuousTe/>,
  tamil: <PastPerfectContinuousTa/>,
  kannada: <PastPerfectContinuousKa/>
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
