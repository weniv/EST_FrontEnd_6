import useLang from "./Hook/useLang";

export default function LangSelector() {
    const { languageData, currentLanguage, changeLanguage } = useLang();

    return (
        <>
            <h2>{languageData.languageSelector}</h2>
            <button
                onClick={() => {
                    changeLanguage("en");
                }}
                disabled={currentLanguage === "en"}
            >
                English
            </button>
            <button
                onClick={() => {
                    changeLanguage("ko");
                }}
                disabled={currentLanguage === "ko"}
            >
                한국어
            </button>
            <button
                onClick={() => {
                    changeLanguage("ja");
                }}
                disabled={currentLanguage === "ja"}
            >
                日本語
            </button>
        </>
    );
}
