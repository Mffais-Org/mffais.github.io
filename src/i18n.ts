import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json"; // English
import translationFR from "./locales/fr/translation.json"; // French
import translationBG from "./locales/bg/translation.json"; // Bulgarian
import translationBN from "./locales/bn/translation.json"; // Bengali
import translationCA from "./locales/ca/translation.json"; // Catalan
import translationCS from "./locales/cs/translation.json"; // Czech
import translationDA from "./locales/cs/translation.json"; // Danish
import translationDE from "./locales/cs/translation.json"; // German
import translationEL from "./locales/cs/translation.json"; // Greek
import translationES from "./locales/cs/translation.json"; // Espanol
import translationFI from "./locales/cs/translation.json"; // Finish
import translationHI from "./locales/cs/translation.json"; // Hindi
import translationHU from "./locales/cs/translation.json"; // Hungarian
import translationID from "./locales/cs/translation.json"; // Indonesian
import translationIT from "./locales/cs/translation.json"; // Italian
import translationJA from "./locales/cs/translation.json"; // Japanese
import translationKO from "./locales/cs/translation.json"; // Korean
import translationLT from "./locales/cs/translation.json"; // Lithuanian
import translationMR from "./locales/cs/translation.json"; // Marathi
import translationMS from "./locales/cs/translation.json"; // Malay
import translationNL from "./locales/cs/translation.json"; // Dutch
import translationNO from "./locales/cs/translation.json"; // Norwegian
import translationPL from "./locales/cs/translation.json"; // Polish
import translationPT from "./locales/cs/translation.json"; // Portuguese
import translationRO from "./locales/cs/translation.json"; // Romanian
import translationRU from "./locales/cs/translation.json"; // Russian
import translationSK from "./locales/cs/translation.json"; // Slovak
import translationSR from "./locales/cs/translation.json"; // Serbian
import translationSV from "./locales/cs/translation.json"; // Swedish
import translationTH from "./locales/cs/translation.json"; // Thai
import translationTL from "./locales/cs/translation.json"; // Tagalog
import translationTR from "./locales/cs/translation.json"; // Turkish
import translationUK from "./locales/cs/translation.json"; // Ukrainian
import translationVI from "./locales/cs/translation.json"; // Vietnamese
import translationZH from "./locales/cs/translation.json"; // Chinese

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  bg: {
    translation: translationBG,
  },
  bn: {
    translation: translationBN,
  },
  ca: {
    translation: translationCA,
  },
  cs: {
    translation: translationCS,
  },
  da: {
    translation: translationDA,
  },
  de: {
    translation: translationDE,
  },
  el: {
    translation: translationEL,
  },
  es: {
    translation: translationES,
  },
  fi: {
    translation: translationFI,
  },
  hi: {
    translation: translationHI,
  },
  hu: {
    translation: translationHU,
  },
  id: {
    translation: translationID,
  },
  it: {
    translation: translationIT,
  },
  ja: {
    translation: translationJA,
  },
  ko: {
    translation: translationKO,
  },
  lt: {
    translation: translationLT,
  },
  mr: {
    translation: translationMR,
  },
  ms: {
    translation: translationMS,
  },
  nl: {
    translation: translationNL,
  },
  no: {
    translation: translationNO,
  },
  pl: {
    translation: translationPL,
  },
  pt: {
    translation: translationPT,
  },
  ro: {
    translation: translationRO,
  },
  ru: {
    translation: translationRU,
  },
  sk: {
    translation: translationSK,
  },
  sr: {
    translation: translationSR,
  },
  sv: {
    translation: translationSV,
  },
  th: {
    translation: translationTH,
  },
  tl: {
    translation: translationTL,
  },
  tr: {
    translation: translationTR,
  },
  uk: {
    translation: translationUK,
  },
  vi: {
    translation: translationVI,
  },
  zh: {
    translation: translationZH,
  },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // Set the default language
    keySeparator: false, // Allow for nested translations without using dots
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

export default i18n;
