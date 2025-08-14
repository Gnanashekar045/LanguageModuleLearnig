import React from "react";
import { useParams } from "react-router-dom";
import FutureSimpleEn from "../FutureSimple/FutureSimpleEn";
import FutureSimpleHi from "../FutureSimple/FutureSimpleHi";
import FutureSimpleTe from "../FutureSimple/FutureSimpleTe";
import FutureSimpleTa from "../FutureSimple/FutureSimpleTa";
import FutureSimpleKa from "../FutureSimple/FutureSimpleKa";




const texts = {
  english: <FutureSimpleEn/>,
  hindi: <FutureSimpleHi/>,
  telugu: <FutureSimpleTe/>,
  tamil: <FutureSimpleTa/>,
  kannada: <FutureSimpleKa/>
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
