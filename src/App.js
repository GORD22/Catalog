import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CatalogContainer from "./components/Catalog/CatalogContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <CatalogContainer/>
            <Footer/>
        </div>
    );
}

export default App;
export const baseURL = "http://contest.elecard.ru/frontend_data/";