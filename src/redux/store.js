import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"



let store={


  _state:{

yourF:[
{id:0, name:'miyuk',img:"https://www.koty.pl/wp-content/uploads/2018/12/kot-w-kartonie.jpg"},
{id:1, name:'svetok',img:"https://tse1.mm.bing.net/th?id=OIP.dlUioYhHO6doaTS9_4XLOgHaE8&pid=Api&P=0&w=271&h=181"},
{id:2, name:'diyuk',img:"https://tse4.mm.bing.net/th?id=OIP.XF3qr4AptktyAEgcSMmgkQHaF7&pid=Api&P=0&w=192&h=154"},
{id:3, name:'negro',img:"https://tse1.mm.bing.net/th?id=OIP.8AVI7oUv904gDp1CIgHzUAHaE7&pid=Api&P=0&w=269&h=179"},
{id:4, name:'pxci muk',img:"https://tse1.mm.bing.net/th?id=OIP.A4r_nuK1Cc9MYpPoRk2vngHaEo&pid=Api&P=0&w=275&h=172"},
{id:5, name:'pxcik',img:"https://i0.wp.com/cowsierscipiszczy.pl/wp-content/uploads/2018/03/kot-syberyjski-opis-rasy.jpg?resize=800%2C875&ssl=1"}
],

dialogs:{
    massages:[
        {massage:'waddwd',yuy:true,id:1},
        {massage:'es miyuk em',yuy:false,id:2},
        {massage:'esfeeffffe',yuy:false,id:3},
        {massage:'yuyuyuyu',yuy:false,id:4},
        {massage:'uuuuuuuuu',yuy:true,id:5}
    ],
    massagetext:"",

    friends:[
        {id:0, name:'miyuk',img:"https://www.koty.pl/wp-content/uploads/2018/12/kot-w-kartonie.jpg",ismain:true},
        {id:1, name:'svetok',img:"https://tse1.mm.bing.net/th?id=OIP.dlUioYhHO6doaTS9_4XLOgHaE8&pid=Api&P=0&w=271&h=181"},
        {id:2, name:'diyuk',img:"https://tse4.mm.bing.net/th?id=OIP.XF3qr4AptktyAEgcSMmgkQHaF7&pid=Api&P=0&w=192&h=154"},
        {id:3, name:'negro',img:"https://tse1.mm.bing.net/th?id=OIP.8AVI7oUv904gDp1CIgHzUAHaE7&pid=Api&P=0&w=269&h=179"},
        {id:4, name:'pxci muk',img:"https://tse1.mm.bing.net/th?id=OIP.A4r_nuK1Cc9MYpPoRk2vngHaEo&pid=Api&P=0&w=275&h=172"},
        {id:5, name:'pxcik',img:"https://i0.wp.com/cowsierscipiszczy.pl/wp-content/uploads/2018/03/kot-syberyjski-opis-rasy.jpg?resize=800%2C875&ssl=1"}
        ]

   
},
          yourp:{
           posts:[
            {post:'esor mers merav(((',like:'1000', id:0},
            {post:'ognec inc avarayri chacakramtum',like:'13', id:1},
            {post:'ova mers',like:'30', id:2},
            {post:'erek miyuk dara',like:'999999999', id:3},
            {post:'es esor kerel em hacik',like:'12', id:4}   
        ],
        posttext:''}
},

_rerendertree(){},



subscribe(observer){
this._rerendertree=observer
},

dispatch(action){
 this._state.yourp=profileReducer(this._state.yourp,action);  
 this._state.dialogs=dialogsReducer(this._state.dialogs,action); 
 this._rerendertree(this._state)  
    
},


get state(){
return this._state
}

}










export default store
window.store=store











/*

addp(){
    let massi={post:this._state.yourp.posttext,like:0};
    this._state.yourp.posts.push(massi);
    this._state.yourp.posttext='';
this._rerendertree(this._state)},

updateNewPostText(data){

    this._state.yourp.posttext=data
    this._rerendertree(this._state)
},






if(action.type==='ADD-POST'){
    let massi={post:this._state.yourp.posttext,like:0};
    this._state.yourp.posts.push(massi);
    this._state.yourp.posttext='';
this._rerendertree(this._state) ;
}
else if(action.type==='UPD-POST-TEXT'){
    this._state.yourp.posttext=action.data
this._rerendertree(this._state)

if(action.type==='UPD-MASSAGE-TEXT'){
        this._state.dialogs.massagetext=action.data
    this._rerendertree(this._state)
    }
    else if(action.type==='ADD-MASAGE'){
        let massi={massage:this._state.dialogs.massagetext,yuy:true,id:4};
        this._state.dialogs.massages.push(massi);
        this._state.dialogs.massagetext='';
    this._rerendertree(this._state) ;
    }
} */