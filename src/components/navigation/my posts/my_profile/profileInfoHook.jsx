import React, { useEffect, useState } from 'react';

import c from './yourposts.module.css'

import ProfileData from './profiledata';
import ProfilesPhoto from './profilesPhoto';
import Profileform from './profileform';
import useBoolean from '../../../../huck/useBoolean';
//ete ashxatei hin versiai het kogtagorcei React.memo




const ProfileInfoHook=(props)=>{
    


let [editMode,setEditmode]=useBoolean(false)


return <div>
<ProfilesPhoto photos={props.posts.photos} ChangeFoto={props.ChangeFoto} editMode={editMode} isowner={props.isowner} />
{props.isowner ? <div><button onClick={setEditmode}>edit</button></div>:<></> }

{!editMode ? <ProfileData {...props}  status={props.Status} editMode={editMode}  /> :<Profileform changeEditModeToFalse={setEditmode} status={props.Status} {...props} contacs={props.posts.contacs} />}




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