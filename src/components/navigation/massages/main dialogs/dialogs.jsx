import React from 'react';
import classes from'./style.module.css'
import Massage from '../this chat/massages';
import Friends from '../friends/friends';
import Friend from '../frienditems/frienditem';
import DialogItem from '../dialogitems/dialogitem'
import { newmassage } from '../../../../redux/dialogs-reducer';
import {connect} from 'react-redux'
import withAuthRedirect from '../../../../hoc/withAuthRedirect';
import { compose } from 'redux';
function Dialog(props){



    let ftable = props.dialogs.friends.map((el,)=>{
        return <Friend id={el.id} name={el.name} img={el.img}  ismain={el.ismain} key={el.id} />})
    
        let dialog=props.dialogs.massages.map((el)=>{
            return <DialogItem massage={el.massage}  isyou={el.yuy} key={el.id} />})
            
return  <div className={`${classes.dialogs} navigacia`}>

<Friends data={ftable}/> 

<Massage data={dialog}  addmassage={props.addmassage} />


</div>


}




  


let mapStateToProps=(state)=>{
    return{
dialogs:state.dialogs,


    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        addmassage:(e)=>{dispatch(newmassage(e))}

    }
}




export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialog,'/login')