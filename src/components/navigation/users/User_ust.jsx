import * as axios from "axios";
import React from "react";
import c from './users.module.css'
import userok from '../../../asets/4b71f8137985eaa992d17a315997791e.jpg'

let Users=(props)=>{

let getus=()=>{if(props.users.length===0){
    
    
    
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
    .then((data)=>{
        props.setusers(data.data.items);
    })
    
    
}}



let users=props.users.map((u)=>{
    

return (

        
<div key={u.id} className={c.user} >
    
    <span >
        <div><img src={u.photos.small !=null ? u.photos.small:userok} alt="buba" className={c.img} /></div>
        <div>{u.name}</div>
        <div>{u.status}</div>
        <div>diyuk</div>
        <div>
            
        </div>
    </span>
    <span>
    {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>unfollow</button> : <button onClick={()=>{props.follow(u.id)}}>follow</button>  } 
    </span>
    <br /><br /><br /><br />
</div>


)

})


return (

<div className="navigacia">
<div className={c.users}>
<button onClick={getus}></button>
{users}
</div>
</div>



)
}



/*[
    {
        id: 0,
        followed: true,
        fullname: 'anton',
        img:'https://www.vokrug.tv/pic/person/0/7/3/b/073be85b9c8d5721d5d083c91aaee552.jpg',
        status: 'es misht pisonerin kerakrum em',
        location: {
            city: "Erevan",
            country: "Azerbadjan"
        }
    },
    {
        id: 1,
        followed: false,
        fullname: 'miyuk',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Turkish_Van_Cat.jpg/1200px-Turkish_Van_Cat.jpg',
        status: 'es pisyok em, hargum em antonin',
        location: {
            city: "Erevan",
            country: "Armenia"
        }
    },
    {
        id: 2,
        followed: false,
        fullname: 'tamara',
        img:'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/dcdc5133-234d-410f-972f-a81d65c0c3ae/600x900',
        status: 'devacka tamara, ti menya monila',
        location: {
            city: "Kiev",
            country: "Ukraine"
        }
    },
    {
        id: 3,
        followed: true,
        img:"https://pbs.twimg.com/profile_images/853576608837509120/H3cV-r-l_400x400.jpg",
        fullname: 'svetik from ukraine',
        status: 'paytcrin inc prcec taxtiser',
        location: {
            city: "Oddesa",
            country: "Ukrainne"
        }
    },
    {
        id: 4,
        followed: true,
        img:"https://upload.wikimedia.org/wikipedia/commons/3/39/HisHolinessVazgenI.jpg",
        fullname: 'vazgen',
        status: 'ya borbist',
        location: {
            city: "erevan",
            country: "Azerbadjan"
        }
    },
    {
        id: 5,
        followed: false,
        fullname: 'sanesan',
        img:"https://i1.wp.com/baragozik.ru/wp-content/uploads/2017/04/Sanosan-1024x1024.jpg",
        status: 'grigorisin spanel em',
        location: {
            city: "masctac",
            country: "maxctac"
        }
    }
]*/