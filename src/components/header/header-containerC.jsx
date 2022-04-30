import React from 'react';
import Header from './header'; 
import { connect } from 'react-redux';
import { SetLogin} from '../../redux/auth-reducer';

class Headercontainerc extends React.Component{

componentDidMount(){
    
}

render()
{
    return <Header {...this.props} />}
}

let mapStateToProps=(state)=>{
    return{
auth:state.auth


    }
}

    let mapDispatchToProps={
    SetLogin,
   
    }











export default connect(mapStateToProps,mapDispatchToProps)(Headercontainerc)