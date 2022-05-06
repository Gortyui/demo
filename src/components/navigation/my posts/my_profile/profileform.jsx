import React from 'react'
import { useForm } from 'react-hook-form'
import c from './yourposts.module.css'



const Contacs=(props)=>{
    return Object.keys(props.obj).map((el)=>{
      
        return <div key={el}>
        <span className={`${c.item}`}>{el}:</span>
        <input {...props.func(el)} defaultValue={props.obj[el]} />
        </div>})
}

function Profileform(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode:'onBlur'});
    const onSubmit = data => {props.changeprofile(
      {userId:props.posts.userId,
        lookingForAJob:data.lookingjob,
        LookingForAJobDescription:data.job_des,
        FullName:data.name,
        AboutMe:data.aboutme,

        contacts: {
vk: data.vk ,
facebook: data.facebook ,
instagram: data.instagram ,
twitter: data.twitter  ,
website: data.website ,
youtube:  data.youtube ,
mainLink:  data.mainLink
        }
      
      });
     props.changeEditModeToFalse()
      props.setStatus(data.status);
      }



  return (
    <div>

<br />
<div className={c.description}>

<form onSubmit={handleSubmit(onSubmit)}>
<span  className={`${c.item}`}>fullname:<input {...register('name')} defaultValue={props.posts.fullName} /></span>
<br />

<div><span className={c.item}>Status:</span><input {...register('status')} defaultValue={props.status} autoFocus={true} className={`${c.changeStatus}`}   /></div>
<br />
<span  className={`${c.item}`} >AboutMe:<input {...register('aboutme')} defaultValue={props.posts.aboutme} /></span>
<br />
<br />
{<div className={c.contacs}><Contacs func={register} obj={props.posts.contacs} /></div>}

    <span className={c.item}>lookingforajob:<input  {...register('lookingjob')} type='checkbox' /></span>
<br />
    <span className={c.item}>lookingforajob des:<input {...register('job_des')} defaultValue={props.posts.lookingForAJobDescription} /></span>
  <br />  <button>save</button>
    </form>
    </div>
    
    </div>
  )
}

export default Profileform