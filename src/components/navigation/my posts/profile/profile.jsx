import React from 'react';
import Input from '../../../../component k2/input';
import classes from './profile.module.css'







function Profile(props) {



return <div>
    
    < div className={`${classes.orange} q`}>

        BAREV
        {props.isowner ? <div><Input  pl='grir' {...props} />
        <br />
        <br /></div> : <></>}

</div>

</div>
}
export default Profile
//updpost={props.updpost} addpost={props.addpost}
//dispatch={props.dispatch}