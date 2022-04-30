import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './header.module.css'
function LoginEl(props){


    return <div>barev : {props.login}<br /> <button onClick={props.disslogin} className={c.login}>disslogin</button></div>
}

function NotLoginEl(){
    return <div><NavLink to='/login'>
    <button className={c.login}>log in</button>
    </NavLink></div>
}


function Header(props){


return(<div  className={`${c.header} q`}>
    GOrik*s SITE.com<div>
        <br />
        {props.auth.isauth ?<LoginEl disslogin={()=>{props.SetLogin(false);console.log('wd')}} login={props.auth.login}/> :<NotLoginEl  />}</div>
            
            </div>)
}

export default Header