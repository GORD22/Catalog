import React from 'react'
import style from '../../assets/Catalog/Card.module.css'
import cross from '../../assets/img/CatalogElement/close-cross.svg'
import {baseURL} from '../../App'
import cn from 'classnames'

const Card = ({element, hiddenCards, setHiddenCards}) => {
    const HideCard = () => {
        localStorage.setItem(element.id, element.image)
        setHiddenCards(Object.values(localStorage))
    }
    const date = `${new Date(Number(element.timestamp))}`
        .slice(0, `${new Date(Number(element.timestamp))}`.indexOf('G'))

    return (
        <article className={hiddenCards.includes(element.image) ? cn(style.element, style.hiddenElement) : style.element}>
            <div className={style.imgContainer}>
                <button className={style.closeButton} onClick={HideCard}>
                    <img className={style.cross} src={cross} alt={''}/>
                </button>
                <img className={style.img} src={`${baseURL}${element.image}`} alt={''}/>
            </div>
            <div>
                <b>File: </b>{element.image.slice(element.image.indexOf('/') + 1)}
            </div>
            <div>
                <b>File size: </b>{Math.round(element.filesize/1000)} kB
            </div>
            <div>
                <b>Date: </b> {date}
            </div>
            <div>
                <b>Category: </b> {element.category}
            </div>
        </article>
    )
}

export default Card