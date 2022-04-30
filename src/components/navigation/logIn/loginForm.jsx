import { useForm } from 'react-hook-form'
import c from './login.module.css'






let LoginForm=(props)=>{

  let gmailP=/\w+@[a-zA-Z]+(\.[a-zA-Z]+)?\.[a-zA-Z]+/;
  let hasP=/\s/
  


    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode:'onBlur'});
    const onSubmit = data => {props.SetLogin(true,data.name,data.password,data.check);};
   /* let d=watch("name")
    let v=watch("password")
    let z=watch("check")
    console.log(d,v,z)*/
    watch('name')

//props.SetLoginStatus(
 
    return (
      
        <div className={c.loginarea}>
          
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className={c.login}>LOGIN</h1>
          <input  {...register("name",{required:true,validate:{
            isGmail:data=>gmailP.test(data),
            hasPr:data=>hasP.test(data)?  false : true
          }})} />
          {
            errors.name?errors.name.type==='minLength' ?<span className={c.error}>minlength </span> :
            errors.name.type==='maxLength' ?<span className={c.error}>maxLength </span> :
        errors.name.type==='required' ?<span className={c.error}>required</span> :<></>:null}
          <br />
          
          <input {...register("password", { required: true,validate:{
             
          } })} />
          {
            errors.password?errors.password.type==='minLength' ?<span className={c.error}>minlength </span> :
            errors.password.type==='maxLength' ?<span className={c.error}>maxLength </span> :
        errors.password.type==='required' ?<span className={c.error}>required</span> :<></>:null}
<br />
          <input type='checkbox' {...register('check',{})} />
          {
            errors.check?errors.check.type==='minLength' ?<span className={c.error}>minlength </span> :
            errors.check.type==='maxLength' ?<span className={c.error}>maxLength </span> :
        errors.check.type==='required' ?<span className={c.error}>required</span> :<></>:null}
          <br />

          {props.auth.loginStatus===1 ? <span className={c.error}>invalid values</span> :<></>}
          {props.auth.loginStatus===10 ? <span className={c.error}>do captcha</span> :<></>}
          
          <br />
          <button>send</button>
          
        </form></div>
      );

    
   
    
}


export default  LoginForm

