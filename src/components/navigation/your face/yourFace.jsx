import React, { createRef } from "react"
import { connect } from "react-redux"
import { loadThunkCreator } from "../../../redux/yourFace"
import c from './face.module.css'
class YourDirtyFace extends React.Component{

    vidRef=createRef()

    componentDidMount(){

        this.props.load(this.vidRef.current)
    }

    render(){
        return<div className="navigacia">
    <br />
    <div >
    <video className={c.vid} controls ref={this.vidRef}></video>
    </div>

</div>
}
    
}

//const mapStateToProps=()=>{}
const mapDispatchToProps={
    load:loadThunkCreator
}

const YourFace=connect(null,mapDispatchToProps)(YourDirtyFace)


export default YourFace