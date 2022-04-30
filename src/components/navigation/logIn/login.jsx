import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './loginForm';
import { SetLogin,getAuth } from '../../../redux/auth-reducer';
import { compose } from 'redux';

import withDisAuthRedirect from '../../../hoc/withDisAuthRedirect';


function LogIn(props){
    return <div className='navigacia'><LoginForm {...props} /></div>
}

let mapDispatchToProps={
    SetLogin,
    getAuth
    }
    
    let mapStateToProps=(state)=>{
        return{
           
        }
    }

export default compose(connect(mapStateToProps,mapDispatchToProps),withDisAuthRedirect)(LogIn,'/profile')