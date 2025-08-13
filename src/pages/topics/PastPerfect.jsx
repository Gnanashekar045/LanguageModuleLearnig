import React from "react";
import { useParams } from "react-router-dom";
import PastPerfectEn from "../PastPerfect/PastPerfectEn";
import PastPerfectHI from "../PastPerfect/PastPerfectHI";
import PastPerfectTe from "../PastPerfect/PastPerfectTe";
import PastPerfectTa from "../PastPerfect/PastPerfectTa";
import PastPerfectKa from "../PastPerfect/PastPerfectKa";



const texts = {
  english: <PastPerfectEn/>,
  hindi: <PastPerfectHI/>,
  telugu: <PastPerfectTe/>,
  tamil: <PastPerfectTa/>,
  kannada: <PastPerfectKa/>
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
