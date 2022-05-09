import * as axios from 'axios'
let Api_Key=global.Api_Key


let instance=axios.create({
    
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{"API-KEY":Api_Key }
});

function refresh_ist(){
    
    if(Api_Key !== global.Api_Key){

Api_Key=global.Api_Key
console.log(Api_Key);
    instance=axios.create({
        withCredentials:true,
        baseURL:'https://social-network.samuraijs.com/api/1.0/',
        headers:{"API-KEY":Api_Key }
    })};  
}

export const userAPI= {
    GetPage:(page=1,count=5)=>{refresh_ist(); return instance.get(`users?page=${page}&count=${count}`).then(data=>{return data.data})},
    UnFollow:(id)=>{refresh_ist(); return instance.delete(`follow/${id}`).then(data=> {return data.data})},
    Follow:(id)=>{refresh_ist(); return instance.post(`follow/${id}`).then(data=> {return data.data})}
};

export const profileAPI={
    GetProfile:(id)=>{refresh_ist(); return instance.get(`profile/${id}`).then((data)=>{return data.data})},
    GetStatus:(id)=>{refresh_ist(); return instance.get(`profile/status/${id}`).then((data)=>{return data.data})},
    UpdStatus:(status)=>{refresh_ist(); return instance.put(`profile/status`,{status}).then((data)=>{return data.data})},
    ChangeFoto:(foto)=>{refresh_ist(); let formData=new FormData()
        formData.append('image',foto)
        return instance.put(`profile/photo`,formData,{headers:{'Content-Type':"multipart/form-data"}})},
        SetProfile:(data)=>{refresh_ist(); return instance.put(`profile`,data).then((data)=>{return data.data})}
};


export const headerAPI={
    GetAuth:()=>{refresh_ist(); return  instance.get(`auth/me`).then((data)=>{console.log(data.data); return data.data })}
};


export const loginAPI={
    Login:(email,password,rememberMe=false,captcha)=> {refresh_ist(); return  instance.post(`auth/login`,{email,password,rememberMe,captcha})},
    LogOut:()=>{refresh_ist(); return  instance.delete(`auth/login`)},
    getCaptcha:()=>{refresh_ist(); return instance.get(`security/get-captcha-url`).then((data)=>{return data.data})},
    setApiKey:(apikey)=>{refresh_ist(); localStorage.setItem('Gorik"s site api-key', JSON.stringify(apikey))}
};

/*.then((data)=>{console.log(data.data); return data.data })*/