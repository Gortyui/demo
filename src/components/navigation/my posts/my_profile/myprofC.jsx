import React, { useEffect } from 'react';
import Post from '../post/post';
import Profile from '../profile/profile';
import c from './yourposts.module.css'
//import ProfileInfo from './profileInfo';
import {  add,setprofile,getProfile,setstatus,GetStatus,Changeprofile, deletePost, changephoto } from '../../../../redux/profile-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import WihtUrlParams from '../../../../hoc/withUrlParams';
import WihtProfileUrlParams from '../../../../hoc/withProfileUrlRedirectParams';
import ProfileInfoHook from './profileInfoHook';





function MYprof (props){


        
useEffect(()=>{let id=props.profilePage.id||props.auth.id
    props.getProfile(id) ;
props.getStatus(id);
//eslint-disable-next-line react-hooks/exhaustive-deps
},[props.profilePage.id,props.auth.id])



    




let posts = [...props.posts.posts].reverse().map((el) => {
return ( < Post post = {el.post}
like = {el.like}
id = { el.id }
key = { el.id}
deletePost={()=>{props.deletePost(el.id)}}
/>) });  

return (

    <div className='navigacia'>
    <Profile {...props} isowner={!props.profilePage.id ? true : false}/> 
    <ProfileInfoHook {...props} isowner={!props.profilePage.id ? true : false} Status={props.posts.status}/> 
    <br />
    <div className = {c.posts} > 
    {posts} 
    </div>
     </div>
)
}





        



        let mapStateToProps=(state)=>{
            return{
        posts:state.yourp,
        
        
        
        
            }
        }
        
        
        
        let mapDispatchToProps=(dispatch)=>{
            return{
                addPost:(e)=>{dispatch(add(e))},
                Setprofile:(profile)=>{dispatch(setprofile(profile))},
                getProfile:(id)=>{dispatch(getProfile(id))},
                setStatus:(status)=>{dispatch(setstatus(status))},
                getStatus:(id)=>{dispatch(GetStatus(id))},
                deletePost:(id)=>{dispatch(deletePost(id))},
                ChangeFoto:(foto)=>{dispatch(changephoto(foto))},
                changeprofile:(data)=>{dispatch(Changeprofile(data))}
        
            }
        }
           export default compose(
               connect(mapStateToProps,mapDispatchToProps),
               WihtUrlParams,
               WihtProfileUrlParams
               
        )(MYprof,'/login')


















//addpost={props.addpost} updpost={props.updpost}
// dispatch={props.dispatch}


