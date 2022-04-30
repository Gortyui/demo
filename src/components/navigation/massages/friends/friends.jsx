import React from 'react';
import c from'./friends.module.css'


function Friends(props){


    
return <div className={c.maindiv}>
    { props.data }
</div>
}
export default Friends