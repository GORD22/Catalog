import React, {useEffect, useState} from 'react'
import cn from 'classnames'
import style from '../../../assets/Paginator/Paginator.module.css'
import right_arrow from '../../../assets/img/Paginator/arrow_righ.svg'
import left_arrow from '../../../assets/img/Paginator/arrow_left.svg'

const Paginator = ({totalElementsCount, currentPage, pageSize, portionSize = 10, setCurrentPage}) => {

    const pagesCount = Math.ceil(totalElementsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    useEffect(() => {
        if (pagesCount > 0 && pagesCount < currentPage) {
            setCurrentPage(pagesCount)
        }
    }, [pagesCount])

    const portionCount = Math.ceil(pagesCount / portionSize);
    const currentPortion = Math.ceil(currentPage / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);

    useEffect(() => {
        setPortionNumber(currentPortion)
    }, [currentPortion]);

    const leftPortionNumber = portionNumber * portionSize - portionSize + 1;
    const rightPortionNumber = portionNumber * portionSize;

    return (
        <nav className={style.paginator}>
            {
                portionNumber > 1 &&
                <button className={style.button}
                        onClick={() => setPortionNumber(portionNumber - 1)}>
                    <img className={style.arrow} src={left_arrow} alt="prev"/>
                </button>
            }
            {
                pages
                    .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map(p =>
                        <a href='#' className={currentPage === p ? cn(style.page, style.pageActive) : style.page} key={p}
                              onClick={() => setCurrentPage(p)}>{p}</a>)
            }
            {
                portionCount > portionNumber &&
                <button className={style.button}
                        onClick={() => setPortionNumber(portionNumber + 1)}>
                    <img className={style.arrow} src={right_arrow} alt="next"/>
                </button>
            }
        </nav>
    )
}

export default Paginator;