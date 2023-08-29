"use client";
import { ChangeEvent, useEffect, useState } from "react";
import i18n from "../i18n";

export const LangToggle: React.FC = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    i18n.changeLanguage(isEnglish ? "en" : "pt");
  }, [isEnglish]);

  function toggleEnglish() {
    setIsEnglish(!isEnglish);
  }
  return (
    <label className="flex gap-4">
      <input type="checkbox" checked={isEnglish} onChange={toggleEnglish} />
    </label>
  );
};
