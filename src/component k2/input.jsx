
import React from 'react'
import { useForm } from 'react-hook-form'



export default function Input(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode:'onBlur'});
    const onSubmit = data => props.addPost(data.post) ;
    watch('post')

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <textarea placeholder={props.pl} {...register('post',{required:true,minLength:4,maxLength:100})}  />
            {
            errors.post?errors.post.type==='minLength' ?<span>minlength </span> :
            errors.post.type==='maxLength' ?<span>maxLength </span> :
        errors.post.type==='required' ?<span>required</span> :<></>:null}
             <button>uxarki</button>
             </form>
        </div>
    )
}
Input.defaultProps={pl:"moracar"}