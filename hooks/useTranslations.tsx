import { useTranslation } from "react-i18next";

export const useTranslations = () => {
    const { t } = useTranslation();
    return t;
}