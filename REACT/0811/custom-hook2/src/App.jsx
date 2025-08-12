import Contents from "./Contents";
import LangSelector from "./LangSelector";
import { LanguageProvider } from "./LanguageProvider";

function App() {
    return (
        <LanguageProvider>
            <LangSelector />
            <Contents />
        </LanguageProvider>
    );
}

export default App;
