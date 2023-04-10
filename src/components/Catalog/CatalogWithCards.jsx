import React, {useEffect, useState} from 'react'
import style from '../../assets/Catalog/CatalogWithCards.module.css'
import Card from './Card'
import {useDispatch} from 'react-redux'
import {setTotalElementsCount} from '../../store/catalogSlice'

const CatalogWithCards = ({catalogElements, currentPage,
                              pageSize, hiddenCards,
                              setHiddenCards, setSortCatalogElements}) => {

    const dispatch = useDispatch();
    const [tempCatalogElements, setTempCatalogElements] = useState(
        [...catalogElements.filter((e) =>
        !hiddenCards.includes(e.image))]
    )
    
    useEffect(() => {
        setTempCatalogElements(
            [...catalogElements.filter((e) =>
            !hiddenCards.includes(e.image))]
        )
    }, [catalogElements])

    useEffect(() => {
        setTimeout(() => {
            setTempCatalogElements([...catalogElements.filter((e) => !hiddenCards.includes(e.image))])
            dispatch(setTotalElementsCount(catalogElements.length - hiddenCards.length))
        }, 150)

    },[dispatch, hiddenCards])

    const minNumberElementOnPage = pageSize * (currentPage - 1)
    const maxNumberElementOnPage = pageSize * (currentPage) - 1

    const sortCards = (sortType) => {
        setSortCatalogElements(sortType)
    }
    const resetHiddenCards = () => {
        localStorage.clear()
        setHiddenCards(Object.values(localStorage))
        dispatch(setTotalElementsCount(catalogElements.length))
    }

    return (
        <>
            <nav className={style.catalogSettings}>
                <div>
                    <input className={style.radioButton}
                           type={'radio'} name={'sortCards'} id={'category'} defaultChecked={true}
                           onClick={() => sortCards('category')}/>
                    <label htmlFor={'category'}>Категории</label>
                </div>
                <div>
                    <input className={style.radioButton}
                           type={'radio'} name={'sortCards'} id={'date'}
                           onClick={() => sortCards('date')}/>
                    <label htmlFor={'date'}>Дата</label>
                </div>
                <div>
                    <input className={style.radioButton}
                           type={'radio'} name={'sortCards'} id={'name'}
                           onClick={() => sortCards('name')}/>
                    <label htmlFor={'name'}>Название</label>
                </div>
                <div>
                    <input className={style.radioButton}
                           type={'radio'} name={'sortCards'} id={'size'}
                           onClick={() => sortCards('size')}/>
                    <label htmlFor={'size'}>Размер</label>
                </div>
                <button className={style.resetButton} onClick={resetHiddenCards}>Сброс</button>
            </nav>
            <section className={style.content}>
                {
                    tempCatalogElements.filter((e, index) =>
                        index >= minNumberElementOnPage && index <= maxNumberElementOnPage
                    ).map(e =>
                        <Card key={e.id} element={e}
                              hiddenCards={hiddenCards} setHiddenCards={setHiddenCards}/>
                    )
                }
            </section>
        </>
    )
}

export default CatalogWithCards