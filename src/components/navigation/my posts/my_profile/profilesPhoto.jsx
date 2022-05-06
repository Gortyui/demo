import React from 'react'
import nonameimg from '../../../../asets/4b71f8137985eaa992d17a315997791e.jpg'
import c from './yourposts.module.css'

function ProfilesPhoto(props) {
  return (
    <div>
       <div className={c.imgs}><img src={props.photos.small || nonameimg} className={c.small} alt="no foto" />

<br />
<img src={props.photos.large || nonameimg} alt="no foto" className={c.large} /> 
{props.isowner && props.editMode ? <input type='file'  onChange={(e)=>{props.ChangeFoto(e.target.files[0])}} /> :<></>}

</div> 
    </div>
  )
}


export default ProfilesPhoto
