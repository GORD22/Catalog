import React, {useEffect} from "react";
import Catalog from "./Catalog";
import {connect} from "react-redux";
import {requestCatalogElements, setCurrentPage, setHiddenCards, setSortCatalogElements} from "../../store/catalogSlice";
import Preloader from "../common/Preloader/Preloader";

const CatalogContainer = ({catalogElements, initialized, currentPage, pageSize,
                              totalElementsCount, isFetching, hiddenCards,
                              setHiddenCards, requestCatalogElements, setCurrentPage,
                              setSortCatalogElements}) => {
    useEffect(() => {
        requestCatalogElements()
    }, [initialized])

    if (isFetching) return <Preloader/>
    else
        return (
            <Catalog catalogElements={catalogElements} currentPage={currentPage} pageSize={pageSize}
                     totalElementsCount={totalElementsCount} isFetching={isFetching} hiddenCards={hiddenCards}
                     setCurrentPage={setCurrentPage} setHiddenCards={setHiddenCards}
                     setSortCatalogElements={setSortCatalogElements}
            />
        )
}

const mapStateToProps = (state) => ({
    catalogElements: state.catalog.catalogElements,
    initialized: state.catalog.initialized,
    currentPage: state.catalog.currentPage,
    pageSize: state.catalog.pageSize,
    totalElementsCount: state.catalog.totalElementsCount,
    isFetching: state.catalog.isFetching,
    hiddenCards: state.catalog.hiddenCards
})

export default connect(
    mapStateToProps, {
        requestCatalogElements, setCurrentPage, setHiddenCards,
        setSortCatalogElements
    }
)
(CatalogContainer);