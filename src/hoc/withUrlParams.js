import { useParams } from "react-router-dom"

function WihtUrlParams(Component){
    return function Hookcontainer(props){

    let profilePage=useParams()


return <Component {...props} profilePage={profilePage}/>
       

}}

export default WihtUrlParams


