import {createSlice} from "@reduxjs/toolkit";
import {catalogAPI} from "../API/catalogAPI";
import {sortByCategory, sortByNames} from "../utils/sortFunctions/sortFunctions";

const initialState = {
    catalogElements: [],
    totalElementsCount: 0,
    currentPage: 1,
    pageSize: 9,
    isFetching: false,
    hiddenCards: [],
    toggleCatalog: false
}

const catalogSlice = createSlice({
    name: "catalogSlice",
    initialState,
    reducers: {
        setCatalogElements: (state, action) => {
            let id = 0;
            state.catalogElements = [...action.payload]
            state.catalogElements.forEach(element => element.id = id++)
        },
        setFetching: (state, action) => {
            state.isFetching = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setTotalElementsCount: (state, action) => {
            state.totalElementsCount = action.payload
        },
        setHiddenCards: (state, action) => {
            state.hiddenCards = [...action.payload]
        },
        setSortCatalogElements: (state, action) => {
            switch (action.payload) {
                case 'category': {
                    state.catalogElements.sort(sortByCategory)
                    break;
                }
                case 'date': {
                    state.catalogElements.sort((a, b) => a.timestamp - b.timestamp);
                    break;
                }
                case 'name': {
                    state.catalogElements.sort(sortByNames)
                    break;
                }
                case 'size': {
                    state.catalogElements.sort((a, b) => a.filesize - b.filesize);
                    break;
                }
                default:
                    break;
            }
        },
        setToggleCatalog: (state, action) => {
            state.toggleCatalog = action.payload
        }
    }
})

const {actions, reducer} = catalogSlice

export const {
    setCatalogElements,
    setFetching,
    setCurrentPage,
    setTotalElementsCount,
    setHiddenCards,
    setSortCatalogElements,
    setToggleCatalog
} = actions

export const requestCatalogElements = () => async (dispatch) => {
    dispatch(setFetching(true))
    const data = await catalogAPI.getCatalogElements()
    dispatch(setCatalogElements(data))
    dispatch(setTotalElementsCount(data.length))
    dispatch(setHiddenCards(Object.values(localStorage)))
    dispatch(setFetching(false))
}

export default reducer