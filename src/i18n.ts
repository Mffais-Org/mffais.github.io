import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json"; // English
import translationFR from "./locales/fr/translation.json"; // French
import translationBG from "./locales/bg/translation.json"; // Bulgarian
import translationBN from "./locales/bn/translation.json"; // Bengali
import translationCA from "./locales/ca/translation.json"; // Catalan
import translationCS from "./locales/cs/translation.json"; // Czech
import translationDA from "./locales/da/translation.json"; // Danish
import translationDE from "./locales/de/translation.json"; // German
import translationEL from "./locales/el/translation.json"; // Greek
import translationES from "./locales/es/translation.json"; // Spanish
import translationFI from "./locales/fi/translation.json"; // Finnish
import translationHI from "./locales/hi/translation.json"; // Hindi
import translationHU from "./locales/hu/translation.json"; // Hungarian
import translationID from "./locales/id/translation.json"; // Indonesian
import translationIT from "./locales/it/translation.json"; // Italian
import translationJA from "./locales/ja/translation.json"; // Japanese
import translationKO from "./locales/ko/translation.json"; // Korean
import translationLT from "./locales/lt/translation.json"; // Lithuanian
import translationMR from "./locales/mr/translation.json"; // Marathi
import translationMS from "./locales/ms/translation.json"; // Malay
import translationNL from "./locales/nl/translation.json"; // Dutch
import translationNO from "./locales/no/translation.json"; // Norwegian
import translationPL from "./locales/pl/translation.json"; // Polish
import translationPT from "./locales/pt/translation.json"; // Portuguese
import translationRO from "./locales/ro/translation.json"; // Romanian
import translationRU from "./locales/ru/translation.json"; // Russian
import translationSK from "./locales/sk/translation.json"; // Slovak
import translationSR from "./locales/sr/translation.json"; // Serbian
import translationSV from "./locales/sv/translation.json"; // Swedish
import translationTH from "./locales/th/translation.json"; // Thai
import translationTL from "./locales/tl/translation.json"; // Tagalog
import translationTR from "./locales/tr/translation.json"; // Turkish
import translationUK from "./locales/uk/translation.json"; // Ukrainian
import translationVI from "./locales/vi/translation.json"; // Vietnamese
import translationZH from "./locales/zh/translation.json"; // Chinese

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
    keySeparator: ".", // Set the key separator
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

export default i18n;
