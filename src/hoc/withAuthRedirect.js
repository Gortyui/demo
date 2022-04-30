import React from "react";
import {Navigate} from 'react-router-dom'
import { connect } from 'react-redux';

let mapStateToPropsForRedirect=(state)=>{
    return{
auth:state.auth


    }
}


const withAuthRedirect=(Component,path)=>{
    class RedirectComponent extends React.Component{
        render()
        {
        if(!this.props.auth.isauth){  return <Navigate to={path} />}
            return <Component {...this.props} />
        }
    }

    let CAuthRederectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent)
    return CAuthRederectComponent
}


export default withAuthRedirect