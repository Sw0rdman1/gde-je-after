import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AVAILABLE_LANGUAGES, serbianLanguage } from "../constants/languages";

import translationEn from "./locales/en-US.json";
import translationSr from "./locales/sr-RS.json";

const resources = {
    "sr-RS": { translation: translationSr },
    "en-US": { translation: translationEn },
};

const initI18n = async () => {
    let savedLanguage = await AsyncStorage.getItem("language");

    if (!savedLanguage) {
        const locale = Localization.getLocales()[0].languageTag;
        if (AVAILABLE_LANGUAGES.includes(locale)) {
            savedLanguage = locale;
        } else {
            savedLanguage = serbianLanguage
        }
    }


    i18n.use(initReactI18next).init({
        resources,
        lng: savedLanguage,
        fallbackLng: "pt-BR",
        interpolation: {
            escapeValue: false,
        },
    });
};

initI18n();

export default i18n;