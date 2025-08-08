import React from "react";
import { useParams } from "react-router-dom";

const texts = {
  english: "Future tense examples: I will go, she will eat, they will come.",
  hindi: "भविष्य काल: मैं जाऊँगा, वह खाएगी, वे आएँगे।",
  telugu: "భవిష్యత్ కాలం: నేను వెళ్లి ఉండను, ఆమె తింటుంది, వారు వస్తారు.",
  tamil: "எதிர்காலம்: நான் போவேன், அவள் சாப்பிடுவாள், அவர்கள் வருவார்கள்.",
  kannada: "ಭವಿಷ್ಯದ ಕಾಲ: ನಾನು ಹೋಗುತ್ತೇನೆ, ಅವಳು ತಿನ್ನುತ್ತಾಳೆ, ಅವರು ಬರುತ್ತಾರೆ."
};

export default function FutureTense() {
  const { lang } = useParams();
  const l = (lang || "english").toLowerCase();
  return (
    <div>
      <h3 className="text-xl font-medium mb-2">Future Tense</h3>
      <p>{texts[l]}</p>
    </div>
  );
}
