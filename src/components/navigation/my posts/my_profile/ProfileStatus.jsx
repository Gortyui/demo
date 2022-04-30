import React from "react";
import c from './yourposts.module.css'
const ProfileStatus=(props)=>{

return <div>{!props.editMode ? <span onDoubleClick={props.changetoInput}  className={`${c.item}`}>status:{props.Status}</span> :
<input  onDoubleClick={props.changetoSpan} 
onChange={(e)=>{props.ChangeStatus(e)}} value={props.status}  
autoFocus={true} className={`${c.changeStatus}`}   />}</div> 

}

export default ProfileStatus