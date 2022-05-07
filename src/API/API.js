import * as axios from 'axios'

const instance=axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{"API-KEY":"772a8372-de8b-4ee3-8e0a-76cb42801e9a"}
});

export const userAPI= {
    GetPage:(page=1,count=5)=>{return instance.get(`users?page=${page}&count=${count}`).then(data=>{return data.data})},
    UnFollow:(id)=>{ return instance.delete(`follow/${id}`).then(data=> {return data.data})},
    Follow:(id)=>{return instance.post(`follow/${id}`).then(data=> {return data.data})}
};

export const profileAPI={
    GetProfile:(id)=>{return instance.get(`profile/${id}`).then((data)=>{return data.data})},
    GetStatus:(id)=>{return instance.get(`profile/status/${id}`).then((data)=>{return data.data})},
    UpdStatus:(status)=>{return instance.put(`profile/status`,{status}).then((data)=>{return data.data})},
    ChangeFoto:(foto)=>{ let formData=new FormData()
        formData.append('image',foto)
        return instance.put(`profile/photo`,formData,{headers:{'Content-Type':"multipart/form-data"}})},
        SetProfile:(data)=>{return instance.put(`profile`,data).then((data)=>{return data.data})}
};


export const headerAPI={
    GetAuth:()=>{return  instance.get(`auth/me`).then((data)=>{console.log(data.data); return data.data })}
};


export const loginAPI={
    Login:(email,password,rememberMe=false,captcha)=> { return  instance.post(`auth/login`,{email,password,rememberMe,captcha})},
    LogOut:()=>{return  instance.delete(`auth/login`)},
    getCaptcha:()=>{return instance.get(`security/get-captcha-url`).then((data)=>{return data.data})}
};

/*.then((data)=>{console.log(data.data); return data.data })*/