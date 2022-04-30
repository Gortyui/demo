import c from './users.module.css'

import React from "react";


import Paginator from '../../../component k2/paginator/paginator';
import UsersRender from './userPattern';

let Users=(props)=>{

    


    return(
    <div className="navigacia">
       
    <div className={c.users}>
        <div className={c.allpages}>  <Paginator changecurrentpage={props.changecurrentpage}
         totalItemsCount={props.totalUserCount} pageSize={props.pageSize} portion={props.portion} currentpage={props.currentpage} />   </div>

        <UsersRender 
        isFetching={props.isFetching} followUsers={props.followUsers}
        FollowingInProgres={props.FollowingInProgres}  users={props.users} />  
    </div>
    
    </div> )}


export default Users

