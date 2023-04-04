import React, {useState} from "react";
import CatalogWithCards from "./CatalogWithCards";
import CatalogWithTree from "./CatalogWithTree";
import style from "../../assets/Catalog/Catalog.module.css"

const Catalog = ({catalogElements, totalElementsCount, currentPage,
                     pageSize, hiddenCards, setCurrentPage,
                     setHiddenCards, setSortCatalogElements, requestCatalogElements}) => {
    const [toggleCatalog, setToggleCatalog] = useState(false);

    const TreeView = () => {
        setSortCatalogElements('category')
        setToggleCatalog(true)
    }
    return (
        <div className={style.catalog}>
            <div className={style.catalogToggle}>
                <div>
                    <label>Карточки</label>
                    <input className={style.radioButton} type={"radio"} name={'toggleCatalog'} defaultChecked
                           onClick={() => setToggleCatalog(false)}/>
                </div>
                <div>
                    <label>Список</label>
                    <input className={style.radioButton} type={"radio"} name={'toggleCatalog'}
                           onClick={TreeView}/>
                </div>
            </div>
            {
                !toggleCatalog
                    ? <CatalogWithCards catalogElements={catalogElements} totalElementsCount={totalElementsCount}
                                        currentPage={currentPage} pageSize={pageSize} hiddenCards={hiddenCards}
                                        setCurrentPage={setCurrentPage} setHiddenCards={setHiddenCards}
                                        setSortCatalogElements={setSortCatalogElements}
                                        requestCatalogElements={requestCatalogElements}/>
                    : <CatalogWithTree catalogElements={catalogElements}/>
            }
        </div>
    )
}

export default Catalog;