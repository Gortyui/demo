import React from "react"
import c from './users.module.css'
import userok from '../../../asets/4b71f8137985eaa992d17a315997791e.jpg'
import Loader from '../../../component k2/loader';
import { NavLink } from 'react-router-dom';

function UserPattern(props){

    




    return <div   className={`${c.user} ${props.id===2 ? c.dimon :''}`} >
        
    <span >
        <div ><NavLink  to={`/profile/${props.id}`}><img  src={props.photos.small !=null ? props.photos.small:userok} alt="buba" className={c.img} /></NavLink></div>
        <div >{props.name}</div>
        <div > {props.status}</div>
        <div >{props.id}</div>
        <div>
        {props.isFetching ? <Loader  dec={c.load}/> : null}   
        </div>
    </span>
    <span >
      
    {
    
    props.followed ? <button  disabled={props.FollowingInProgres.some(id=>id===props.id)}  onClick={()=>{
      props.followUsers(props.id,false)
      }}>unfollow</button> : <button  disabled={props.FollowingInProgres.some(id=>id===props.id) } onClick={()=>{
        props.followUsers(props.id,true)}}>follow</button>

} 

    </span>
    <br/>
    <br />
    <br  />
</div>
}

const UsersRender=(props)=>{

    let users=props.users.map((u)=>{

  
        return (
        
        <UserPattern id={u.id} photos={u.photos} name={u.name} status={u.status}
        isFetching={props.isFetching} followed={u.followed} followUsers={props.followUsers}
        FollowingInProgres={props.FollowingInProgres}  users={props.users}   key={u.id} />        
    
        )})

    return <div>{users}</div>
}

/**/


export default UsersRender