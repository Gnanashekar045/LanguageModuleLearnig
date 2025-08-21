import React from "react";
import PresentPerfectEn from "../PresentPerfect/PresentPerfectEn";
import PresentPerfectHi from "../PresentPerfect/PresentPerfectHi";
import PresentPerfectTa from "../PresentPerfect/PresentPerfectTa";
import PresentPerfectTe from "../PresentPerfect/PresentPerfectTe";
import PresentPerfectKa from "../PresentPerfect/PresentPerfectKa";
import { useParams } from "react-router-dom";



const texts = {
  english: <PresentPerfectEn/>,
  hindi: <PresentPerfectHi/>,
  telugu: <PresentPerfectTe/>,
  tamil: <PresentPerfectTa/>,
  kannada: <PresentPerfectKa/>
};

export default function PresentContinuous() {
  const { lang } = useParams();
  const l = (lang || "english").toLowerCase();
  return (
    <div>
      <h3 className="text-xl font-medium mb-2">Present Perfect</h3>
      <h6>{texts[l]}</h6>
    </div>
  );
}
