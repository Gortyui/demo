import React, { useEffect, useState } from 'react';
import ProfileStatus from './ProfileStatus';
import c from './yourposts.module.css'

//ete ashxatei hin versiai het kogtagorcei React.memo

const ProfileInfoHook=(props)=>{
    

let [editMode,setEditmode]=useState(false)

let [status,setStatus]=useState(props.Status)

const changetoSpan=()=>{
    setEditmode(false)
    props.setStatus(status);
}

const changetoInput=()=>{setEditmode(true)}

const  ChangeStatus=(e)=>{setStatus(e.target.value)}

useEffect(()=>{ setStatus(props.Status);
//eslint-disable-next-line react-hooks/exhaustive-deps
},[props.Status])

return <div>

<div className={c.imgs}><img src={props.posts.photos.small} className={c.small} alt="no foto" />
<br />
<img src={props.posts.photos.large} alt="no foto" className={c.large} />
</div>
<br />
<div className={c.description}>
<ProfileStatus editMode={editMode} changetoInput={changetoInput}
 Status={props.Status}
 changetoSpan={changetoSpan} ChangeStatus={ChangeStatus} status={status}  />
<span  className={`${c.item}`} >AboutMe:{props.posts.aboutme}</span>
<br />
<span className={c.item}>facebook: 
    <a target='_blank' rel="noreferrer" className={c.item} href={`${String(props.posts.contacs.facebook).includes('http') ? '' :'//'}${props.posts.contacs.facebook}`}>
    {props.posts.contacs.facebook}</a></span>



<br />
<span className={c.item}>website: 
    <a target='_blank' rel="noreferrer" className={c.item} href={`${String(props.posts.contacs.website).includes('http') ? '' :'//'}${props.posts.contacs.website}`}>
    {props.posts.contacs.website}</a></span> 
    <br />
    <span className={c.item}>vk: 
    <a target='_blank' rel="noreferrer" className={c.item} href={`${String(props.posts.contacs.vk).includes('http') ? '' :'//'}${props.posts.contacs.vk}`}>
    {props.posts.contacs.vk}</a></span> 

    <br />
    <span className={c.item}>twitter: 
    <a target='_blank' rel="noreferrer" className={c.item} href={`${String(props.posts.contacs.twitter).includes('http') ? '' :'//'}${props.posts.contacs.twitter}`}>
    {props.posts.contacs.twitter}</a></span> 

    <br />
    <span className={c.item}>instagram: 
    <a target='_blank' rel="noreferrer" className={c.item} href={`${String(props.posts.contacs.instagram).includes('http') ? '' :'//'}${props.posts.contacs.instagram}`}>
    {props.posts.contacs.instagram}</a></span> 

    <br />
    <span className={c.item}>youtube: 
    <a target='_blank' rel="noreferrer" className={c.item} href={`${String(props.posts.contacs.youtube).includes('http') ? '' :'//'}${props.posts.contacs.youtube}`}>
    {props.posts.contacs.youtube}</a></span> 

    <br />
    <span className={c.item}>github: 
    <a target='_blank' rel="noreferrer" className={c.item} href={`${String(props.posts.contacs.github).includes('http') ? '' :'//'}${props.posts.contacs.github}`}>
    {props.posts.contacs.github}</a></span>

    <br />
    <span className={c.item}>mainLink: 
    <a target='_blank' rel="noreferrer" className={c.item} href={`${String(props.posts.contacs.mainLink).includes('http') ? '' :'//'}${props.posts.contacs.mainLink}`}>
    {props.posts.contacs.mainLink}</a></span>
    <br />

    <span className={c.item}>lookingforajob:{String(props.posts.lookingForAJob)}</span>
<br />
    <span className={c.item}>lookingforajob des:{String(props.posts.lookingForAJobDescription)}</span>
    </div>
 



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