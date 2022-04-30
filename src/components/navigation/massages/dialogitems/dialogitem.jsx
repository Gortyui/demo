import React from 'react';
import c from'./massages.module.css'
let dr;

const DialogItem = (props)=>{
    props.isyou ? dr=c.you : dr=''
    return(
        <span className={`${c.item} ${dr}`}><li>{props.massage}</li><br /></span>
    )
    }

    export default DialogItem