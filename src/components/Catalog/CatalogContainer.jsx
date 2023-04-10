import React, {useEffect} from "react";
import Catalog from "./Catalog";
import {connect} from "react-redux";
import {requestCatalogElements, setCurrentPage, setHiddenCards, setSortCatalogElements} from "../../store/catalogSlice";
import Preloader from "../common/Preloader/Preloader";

const CatalogContainer = ({catalogElements, currentPage, pageSize,
                              totalElementsCount, isFetching, hiddenCards, toggleCatalog,
                              setHiddenCards, requestCatalogElements, setCurrentPage,
                              setSortCatalogElements}) => {
    useEffect(() => {
        requestCatalogElements()
    }, [requestCatalogElements])

    if (isFetching) return <Preloader/>
    else
        return (
            <Catalog catalogElements={catalogElements} currentPage={currentPage} pageSize={pageSize}
                     totalElementsCount={totalElementsCount} isFetching={isFetching} hiddenCards={hiddenCards}
                     toggleCatalog={toggleCatalog} setCurrentPage={setCurrentPage} setHiddenCards={setHiddenCards}
                     setSortCatalogElements={setSortCatalogElements}
            />
        )
}

const mapStateToProps = (state) => ({
    catalogElements: state.catalog.catalogElements,
    currentPage: state.catalog.currentPage,
    pageSize: state.catalog.pageSize,
    totalElementsCount: state.catalog.totalElementsCount,
    isFetching: state.catalog.isFetching,
    hiddenCards: state.catalog.hiddenCards,
    toggleCatalog: state.catalog.toggleCatalog
})

export default connect(
    mapStateToProps, {
        requestCatalogElements, setCurrentPage, setHiddenCards,
        setSortCatalogElements
    }
)
(CatalogContainer);