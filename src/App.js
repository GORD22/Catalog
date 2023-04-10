import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import CatalogContainer from "./components/Catalog/CatalogContainer";

function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <CatalogContainer/>
            <FooterContainer/>
        </div>
    );
}

export default App;
export const baseURL = "http://contest.elecard.ru/frontend_data/";