import React from "react";
import style from "../../assets/Header/Header.module.css"
import {connect} from 'react-redux'
import {setSortCatalogElements, setToggleCatalog} from '../../store/catalogSlice'

const HeaderContainer = ({setToggleCatalog, setSortCatalogElements}) => {
    const treeView = () => {
        setSortCatalogElements('category')
        setToggleCatalog(true)
    }
    const cardsView = () => {
        setToggleCatalog(false)
    }

    return (
        <header className={style.header}>
            <nav className={style.catalogToggle}>
                <div>
                    <label htmlFor={'cards'}>Карточки</label>
                    <input className={style.radioButton} type={"radio"} name={'toggleCatalog'} id={'cards'}
                           defaultChecked
                           onClick={cardsView}/>
                </div>
                <div>
                    <label htmlFor={'tree'}>Список</label>
                    <input className={style.radioButton} type={"radio"} name={'toggleCatalog'} id={'tree'}
                           onClick={treeView}/>
                </div>
            </nav>
        </header>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {setToggleCatalog, setSortCatalogElements})(HeaderContainer);