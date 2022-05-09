import React from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../../hoc/withAuthRedirect'
import { SetApi_Key } from '../../../redux/app-reducer'
function SetApiKey(props) {
const {register,watch,handleSubmit,formState:{errors}}=useForm({mode:'all'})
const onSubmit=(data)=>{props.SetApi_Key(data.apiKey)}
  return (
    <div className='navigacia'><form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='please set your api-key' defaultValue={props.api_key} {...register('apiKey',{required:true})} />
        <br />
      <button >set Indentifity</button>  
        </form></div>
  )
}


let mapDispatchToProps={
    SetApi_Key
    }
    
    let mapStateToProps=(state)=>{
        return{
          api_key: state.app.api_key
        }
    }

export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(SetApiKey,'/profile')


