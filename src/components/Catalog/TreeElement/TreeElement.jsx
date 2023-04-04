import React, {useState} from "react";
import {TreeItem} from "@mui/lab";
import ModalWindowWithImage from "../ModalWindowWithImage/ModalWindowWithImage";
import {baseURL} from "../../../App";
import style from "../../../assets/Catalog/TreeElement.module.css"

const TreeElement = ({element}) => {
    const [ToggleModalWindow, setToggleModalWindow] = useState(false);
    return (
        <div>
            {
                ToggleModalWindow && <ModalWindowWithImage image={`${baseURL}${element.image}`}
                                                           setToggleModalWindow={setToggleModalWindow}/>
            }
            <TreeItem key={element.id} nodeId={`${element.image}`} label={element.image}>
                <TreeItem nodeId={`${element.image}${element.id}`}
                          label={<img className={style.img} src={`${baseURL}${element.image}`} alt={''}/>}
                          onClick={() => setToggleModalWindow(true)}/>
                <TreeItem nodeId={`${element.filesize}${element.id}`} label={`${element.filesize}`}/>
                <TreeItem nodeId={`${element.timestamp}${element.id}`} label={`${element.timestamp}`}/>
                <TreeItem nodeId={`${element.category}${element.id}`} label={`${element.category}`}/>
            </TreeItem>
        </div>
    )
}

export default TreeElement;