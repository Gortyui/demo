import React, { useEffect, useState } from 'react';

import c from './yourposts.module.css'

import ProfileData from './profiledata';
import ProfilesPhoto from './profilesPhoto';
import Profileform from './profileform';
//ete ashxatei hin versiai het kogtagorcei React.memo




const ProfileInfoHook=(props)=>{
    


let [editMode,setEditmode]=useState(false)

const changeEditModeToFalse=()=>{
    setEditmode(false)
    
}

const changeEditModeToTrue=()=>{
    setEditmode(true)

    
}



return <div>
<ProfilesPhoto photos={props.posts.photos} editMode={editMode} isowner={props.isowner} />
{props.isowner ? <div><button onClick={()=>{editMode ? changeEditModeToFalse() : changeEditModeToTrue()}}>edit</button></div>:<></> }

{!editMode ? <ProfileData {...props}  status={props.Status} editMode={editMode}  /> :<Profileform changeEditModeToFalse={changeEditModeToFalse} status={props.Status} {...props} contacs={props.posts.contacs} />}




 </div>
 }



export default ProfileInfoHook


/*"facebook": "facebook.com",
"website": null,
"vk": "vk.com/dimych",
"twitter": "https://twitter.com/@sdf",
"instagram": "instagra.com/sds",
"youtube": null,
"github": "github.com",
"mainLink": null*/