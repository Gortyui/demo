
import c from './yourposts.module.css'

 const Contacs=(props)=>{
    return Object.keys(props.obj).map((el)=>{
      
        return <div key={el}>
        <span className={`${c.item}`}>{el}:
         <a target='_blank' rel="noreferrer" className={c.item} 
         href={`${String(props.obj[el]).includes('http://') || String(props.obj[el]).includes('https://') ? '' :'//'}${props.obj[el]}`}>{props.obj[el]}</a></span>
        </div>})
}

const ProfileData=(props)=>{
    return<div>

<br />
<div className={c.description}>


<span  className={`${c.item}`}>fullname:{props.posts.fullName}</span>
<br />
 <span  className={`${c.item}`}>status:{props.status}</span> 
<br />

<span  className={`${c.item}`} >AboutMe:{props.posts.aboutme}</span>
<br />
{<div className={c.contacs}><Contacs obj={props.posts.contacs} /></div>}

    <span className={c.item}>lookingforajob:{props.posts.lookingForAJob ? <span> yes</span> : <span>no</span>}</span>
<br />
    <span className={c.item}>lookingforajob des:{String(props.posts.lookingForAJobDescription)}</span>
    {props.posts.setProfileStatus.length && props.isowner ? <span>{props.posts.setProfileStatus.map((el)=>{return <div className={c.error}>{el}</div>})}</span>:<></>}
    </div>
    
    </div>
}


export default ProfileData