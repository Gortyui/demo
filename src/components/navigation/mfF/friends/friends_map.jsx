import FrRender from "../friendrender";
import Onefriend from "../friend_pattern/allfriends";

import {connect} from 'react-redux'
import withAuthRedirect from "../../../../hoc/withAuthRedirect";
import { compose } from "redux";
//import react from "react";


const ALfr=(props)=>{
    
    let friends=props.friends.yourF.map((el)=>{return(<div key={el.name}><Onefriend  name={el.name} img={el.img}  /><br /></div>)})

return(<FrRender data={friends}  />)

}

  


let mapStateToProps=(state)=>{
    return{
friends:state.yourF,
auth:state.auth

    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
    }
}




export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(ALfr,'/login')