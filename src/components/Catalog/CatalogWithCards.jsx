import React from "react";
import Paginator from "../common/Paginator/Paginator";
import style from "../../assets/Catalog/CatalogWithCards.module.css";
import Card from "./Card";

const CatalogWithCards = ({catalogElements, totalElementsCount, currentPage,
                              pageSize, hiddenCards, setCurrentPage,
                              setHiddenCards, setSortCatalogElements}) => {
    const minNumberElementOnPage = pageSize * (currentPage - 1);
    const maxNumberElementOnPage = pageSize * (currentPage) - 1;
    const sortCards = (sortType) => {
        setSortCatalogElements(sortType)
    }
    const resetHiddenCards = () => {
        localStorage.clear();
        setHiddenCards(Object.values(localStorage));
    }

    return (
        <div>
            <Paginator totalElementsCount={totalElementsCount} currentPage={currentPage}
                       pageSize={pageSize} setCurrentPage={setCurrentPage}/>
            <div className={style.catalogSettings}>
                <div>
                    <input className={style.radioButton}
                           type={"radio"} name={'sortCards'} defaultChecked={true}
                           onClick={() => sortCards('category')}/>
                    <label>Категории</label>
                </div>
                <div>
                    <input className={style.radioButton}
                           type={"radio"} name={'sortCards'}
                           onClick={() => sortCards('date')}/>
                    <label>Дата</label>
                </div>
                <div>
                    <input className={style.radioButton}
                           type={"radio"} name={'sortCards'}
                           onClick={() => sortCards('name')}/>
                    <label>Название</label>
                </div>
                <div>
                    <input className={style.radioButton}
                           type={"radio"} name={'sortCards'}
                           onClick={() => sortCards('size')}/>
                    <label>Размер</label>
                </div>
                <button className={style.resetButton} onClick={resetHiddenCards}>Сброс</button>
            </div>
            <div className={style.content}>
                {
                    catalogElements.filter((e, index) =>
                        index >= minNumberElementOnPage && index <= maxNumberElementOnPage
                    ).map(e =>
                        <Card key={e.id} element={e}
                              hiddenCards={hiddenCards} setHiddenCards={setHiddenCards}/>
                    )
                }
            </div>
        </div>
    )
}

export default CatalogWithCards;