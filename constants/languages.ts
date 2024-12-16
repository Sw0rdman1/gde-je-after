interface Language {
    langCode: string;
    name: string;
    flag: any;
}

const serbianLanguage = { langCode: 'sr-RS', name: 'SRB', flag: require('../assets/images/flags/sr-RS.png') };
const englishLanguage = { langCode: 'en-US', name: 'ENG', flag: require('../assets/images/flags/en-UK.png') };

const AVAILABLE_LANGUAGES = [serbianLanguage, englishLanguage];

export { Language, AVAILABLE_LANGUAGES, serbianLanguage, englishLanguage };
