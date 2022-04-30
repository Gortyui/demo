import React from "react"
import c from './friends.module.css'
import { NavLink } from 'react-router-dom';

const Friend=(props)=>{
    let path=`/massage/${props.id}`
    //props.ismain ? dr=c.active : dr=''
    
    return(
    <div className={`${c.item}`}>
        <img src={props.img} alt='oh man' className={c.img} /><NavLink to={path} className={({isActive})=> isActive ? c.active : ''}>{props.name}</NavLink>
    </div>)
    }

    export default Friend