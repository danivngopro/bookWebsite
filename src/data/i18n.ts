import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  he: {
    translation: {
      books: "הספרים שלי",
      contactUs: "צור קשר",
      about: "אודות הסופרת",
      copyRight: 'כל הזכויות שמורת',
      copyRightJasmin: 'הספרים של יסמין ונטורה',
      digitalPurchase: 'לרכישה דיגיטלית'
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "he",

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
