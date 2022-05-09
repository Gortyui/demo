import React from 'react';
import classes from './midbar.module.css'
import {NavLink} from'react-router-dom'
function Midbar(){
    
return <div className={`${classes.midbar} q`}>
    
    <div className={classes.item}>
        
        <div><NavLink to='/profile'className={({isActive})=> isActive ? classes.active : ''}>profile</NavLink> </div>

        <div><NavLink to='/massage' className={({isActive})=> isActive ? classes.active : ''}>messeges</NavLink></div>
        
        <div><NavLink to='/news' className={({isActive})=> isActive ? classes.active : ''}>news</NavLink></div>
        
        <div><NavLink to='/music' className={({isActive})=> isActive ? classes.active : ''}>music</NavLink></div>
        
        <div><NavLink to='/settings' className={({isActive})=> isActive ? classes.active : ''}>settings</NavLink></div>

        <div><NavLink to='/about_us' className={({isActive})=> isActive ? classes.active : ''}>about us</NavLink></div>

        <div><NavLink to='/friends' className={({isActive})=> isActive ? classes.active : ''}>friends</NavLink></div>

        <div><NavLink to='/users' className={({isActive})=> isActive ? classes.active : ''}>users</NavLink></div>
        
        <div><NavLink to='/yourface'className={({isActive})=> isActive ? classes.active : ''}>yourface</NavLink> </div>

       

        <div><a href='https://social-network.samuraijs.com/signUp'>if you dont registered</a></div>
    </div>
</div> }
export default Midbar