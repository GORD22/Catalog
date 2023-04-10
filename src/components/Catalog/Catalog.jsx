import React from 'react'
import CatalogWithCards from './CatalogWithCards'
import CatalogWithTree from './CatalogWithTree'
import style from '../../assets/Catalog/Catalog.module.css'

const Catalog = ({catalogElements, totalElementsCount, currentPage,
                     pageSize, hiddenCards, toggleCatalog, setCurrentPage,
                     setHiddenCards, setSortCatalogElements, requestCatalogElements}) => {

    return (
        <main className={style.catalog}>
            {
                !toggleCatalog
                    ? <CatalogWithCards catalogElements={catalogElements} totalElementsCount={totalElementsCount}
                                        currentPage={currentPage} pageSize={pageSize} hiddenCards={hiddenCards}
                                        setCurrentPage={setCurrentPage} setHiddenCards={setHiddenCards}
                                        setSortCatalogElements={setSortCatalogElements}
                                        requestCatalogElements={requestCatalogElements}/>
                    : <CatalogWithTree catalogElements={catalogElements}/>
            }
        </main>
    )
}

export default Catalog;