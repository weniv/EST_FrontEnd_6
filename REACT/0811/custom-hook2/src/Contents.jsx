import useLang from "./Hook/useLang";

export default function Contents() {
    const { languageData } = useLang();
    return (
        <>
            <h3>{languageData.title}</h3>
            <p>{languageData.greeting}</p>
            <p>{languageData.description}</p>
        </>
    );
}
