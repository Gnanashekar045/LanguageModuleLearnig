import React from "react";
import { useParams } from "react-router-dom";
import PresentPerfectContinuousEn from "../PresentPerfectContinuous/PresentPerfectContinuousEn";
import PresentPerfectContinuousTe from "../PresentPerfectContinuous/PresentPerfectContinuousTe";
import PresentPerfectContinuousTa from "../PresentPerfectContinuous/PresentPerfectContinuousTa";
import PresentPerfectContinuousKa from "../PresentPerfectContinuous/PresentPerfectContinuousKa";
import PresentPerfectContinuousHi from "../PresentPerfectContinuous/PresentPerfectContinuousHi";




const texts = {
  english: <PresentPerfectContinuousEn/>,
  hindi: <PresentPerfectContinuousHi/>,
  telugu: <PresentPerfectContinuousTe/>,
  tamil: <PresentPerfectContinuousTa/>,
  kannada: <PresentPerfectContinuousKa/>
};

export default function PresentContinuous() {
  const { lang } = useParams();
  const l = (lang || "english").toLowerCase();
  return (
    <div>
      <h3 className="text-xl font-medium mb-2">Present Tense</h3>
      <h6>{texts[l]}</h6>
    </div>
  );
}
