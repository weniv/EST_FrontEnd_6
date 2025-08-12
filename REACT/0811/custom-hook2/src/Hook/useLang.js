import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";

const useLang = () => {
    const context = useContext(LanguageContext);

    return {
        languageData: context.languages[context.languageState],
        currentLanguage: context.languageState,
        changeLanguage: context.changeLanguage,
    };
};

export default useLang;
