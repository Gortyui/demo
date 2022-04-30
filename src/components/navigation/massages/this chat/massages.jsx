import React from 'react';
import  c from "./massages.module.css";
import { useForm } from 'react-hook-form';

function Massage(props){
    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode:'onBlur'});

    const onSubmit=(data)=>{props.addmassage(data.massage);}
watch('massage')
return <div >
    <div className={c.massages}>
    <ul>{props.data}</ul>
    
    </div>
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register('massage',{required:true,maxLength:75,minLength:5})} placeholder='gri gri uxarki' ></textarea> 
        <br />
        {
            errors.massage?errors.massage.type==='minLength' ?<span>minlength </span> :
            errors.massage.type==='maxLength' ?<span>maxLength </span> :
        errors.massage.type==='required' ?<span>required</span> :<></>:null}
        <br />
        <button >click me</button>
        </form>
        </div>
</div>

}
export default Massage
// value={props.massagetext}  onChange={props.onch} onClick={props.addmassage}