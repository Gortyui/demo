import React from 'react';
import classes from'./post.module.css'
function Post(props){
return  <div>

<img src="https://cdn3.movieweb.com/i/article/CeNq6CF7VAyuhy2NY7ZAdX8BBPwwCJ/1200:100/Avatar-2-Sequels-Production-Budget-1-Billion-Dollars.jpg" alt="los" className={classes.img}/>
<br></br>
<span className={classes.post}>{props.post}</span> <button onClick={props.deletePost}>delete</button>
<br></br>
<span className={classes.like}>like:{props.like}</span> 
<br></br>
<br></br>
<br></br>

</div>
}
export default Post