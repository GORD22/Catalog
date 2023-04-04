import React from "react";
import style from "../../../assets/Preloader/Preloader.module.css";
import preload from "../../../assets/img/Preloader/loading.svg";

const Preloader = () => {
    return (
        <div className={style.preloader}>
            <img src={preload} alt=""/>
        </div>
    )
}

export default Preloader;