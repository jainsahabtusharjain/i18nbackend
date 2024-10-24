import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languagedetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(languagedetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    backend: {
      loadPath: "http://localhost:3001/translation/{{lng}}",
    },
    detection: {
      order: ["path", "navigator", "localStorage"],
      lookupFromPathIndex: 0,
      // order: ["querystring", "navigator", "localStorage"],
      // lookupQuerystring: "lang",
    },
    // this down here is used to apply a lazy loading
    react: {
      useSuspense: true, //enable suspense
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
    },
  });

export default i18n;
