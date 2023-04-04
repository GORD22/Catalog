import React from "react";
import style from "../../../assets/Catalog/ModalWindowWithImage/ModalWindowWithImage.module.css"
import cross from "../../../assets/img/CatalogElement/close-cross.svg";

const ModalWindowWithImage = ({image, setToggleModalWindow}) => {

    return (
        <div className={style.substrate}>
            <div className={style.modalWindow}>
                <img className={style.img} src={image} alt={''}/>
                <button className={style.closeButton} onClick={() => setToggleModalWindow(false)}>
                    <img className={style.cross} src={cross} alt={''}/>
                </button>
            </div>
        </div>
    )
}

export default ModalWindowWithImage;