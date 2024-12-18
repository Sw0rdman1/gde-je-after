
interface Language {
    langCode: string;
    name: string;
    flag: string;
}

const serbianLanguage = { langCode: 'sr-RS', name: 'SRB', flag: '🇷🇸' }
const englishLanguage = { langCode: 'en-US', name: 'ENG', flag: '🇬🇧' }

const AVAILABLE_LANGUAGES = [serbianLanguage, englishLanguage];

export { Language, AVAILABLE_LANGUAGES, serbianLanguage, englishLanguage };
