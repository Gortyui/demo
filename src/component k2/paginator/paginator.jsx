import React, { useEffect, useState } from "react";
import c from './paginator.module.css'

const Paginator=(props)=>{

    let pages=[]
    let pagesCount=Math.ceil(props.totalItemsCount/props.pageSize)
    
    for(let i=1; i<=pagesCount;i++){
    pages.push(i)
    }

    let [portionNumber,SetPortionNumber]=useState(0)

    let  changeLeftBorder=()=>{
      SetPortionNumber(portionNumber-1)
  }

  let  changeRightBorder=()=>{
    SetPortionNumber(portionNumber+1)
}

useEffect(()=>{SetPortionNumber(Math.ceil(props.currentpage/props.portion))},[props.currentpage,props.portion])


let portionCount=Math.ceil(pagesCount/props.portion)

    let leftBorder=(portionNumber-1)*props.pageSize+1

    let rightBorder=portionNumber*props.pageSize
    
    let allpages=pages.filter((n)=>{return n>=leftBorder&&n<=rightBorder}).map((u)=>{return(<span key={u} 
    className={`${u===props.currentpage ? c.current : ''} ${c.pages}`}
      onClick={()=>{props.changecurrentpage(u)}} >{u},</span>)})


    return <div>
<div className={c.paginator}>{leftBorder>1 ? <button onClick={changeLeftBorder}>Prev</button> :<></>}{allpages}{portionNumber<portionCount?<button onClick={changeRightBorder}>next</button>:<></>}</div>
    </div>
}

export default Paginator