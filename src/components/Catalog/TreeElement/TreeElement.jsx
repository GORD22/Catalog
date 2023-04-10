import React, {useState} from "react";
import {TreeItem} from "@mui/lab";
import ModalWindowWithImage from "../ModalWindowWithImage/ModalWindowWithImage";
import {baseURL} from "../../../App";
import style from "../../../assets/Catalog/TreeElement.module.css"

const TreeElement = ({element}) => {
    const [ToggleModalWindow, setToggleModalWindow] = useState(false);
    const date = `${new Date(Number(element.timestamp))}`
        .slice(0,`${new Date(Number(element.timestamp))}`.indexOf('G'))
    return (
        <>
            {
                ToggleModalWindow && <ModalWindowWithImage image={`${baseURL}${element.image}`}
                                                           setToggleModalWindow={setToggleModalWindow}/>
            }
            <TreeItem key={element.id} nodeId={`${element.image}`} label={element.image}>
                <TreeItem nodeId={`${element.image}${element.id}`}
                          label={<img className={style.img} src={`${baseURL}${element.image}`} alt={''}/>}
                          onClick={() => setToggleModalWindow(true)}/>
                <TreeItem nodeId={`${element.filesize}${element.id}`} label={`File size: ${element.filesize} kB`}/>
                <TreeItem nodeId={`${element.timestamp}${element.id}`} label={`Date: ${date}`}/>
                <TreeItem nodeId={`${element.category}${element.id}`} label={`Category: ${element.category}`}/>
            </TreeItem>
        </>
    )
}

export default TreeElement;