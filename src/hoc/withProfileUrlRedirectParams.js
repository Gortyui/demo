import { connect } from "react-redux"
import { Navigate} from "react-router-dom"
let mapStateToPropsForRedirect=(state)=>{
    return{
auth:state.auth


    }
}

function WihtProfileUrlRedirectParams(Component,path){
   


    function Hookcontainer(props){

      

if(!props.profilePage.id&&!props.auth.isauth){ return <Navigate to={path} />}
           
return <Component {...props}  />

       

}
return connect(mapStateToPropsForRedirect)(Hookcontainer)
}





export default WihtProfileUrlRedirectParams