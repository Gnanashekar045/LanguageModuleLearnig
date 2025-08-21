import React from "react";
import { useParams } from "react-router-dom";
import PresentContinuousEn from "../presentContinuous/PresentContinuousEn";
import PresentContinuousHi from "../presentContinuous/PresentContinuousHi";
import PresentContinuousTe from "../presentContinuous/PresentContinuousTe";
import PresentContinuousTa from "../presentContinuous/PresentContinuousTa";
import PresentCountinuousKa from "../presentContinuous/PresentCountinuousKa";


const texts = {
  english: <PresentContinuousEn/>,
  hindi: <PresentContinuousHi/>,
  telugu: <PresentContinuousTe/>,
  tamil: <PresentContinuousTa/>,
  kannada: <PresentCountinuousKa/>
};

export default function PresentContinuous() {
  const { lang } = useParams();
  const l = (lang || "english").toLowerCase();
  return (
    <div>
      <h3 className="text-xl font-medium mb-2">Present Continuous</h3>
      <h6>{texts[l]}</h6>
    </div>
  );
}
