let initstate={
isReady:false
}

const PlayVid='yourface/PLAY-VID'
const VidReducer=(state = initstate,action)=>{
switch(action.type){
case PlayVid:{
return{
    ...state,
    isReady:action.tf
}
}

default:
    return state

   }}
   
    

    export const start=(tf)=>{
        return{
            type:PlayVid,
            tf
        }
    }


export const loadThunkCreator=(ref)=>{
    return async(dispatch)=>{
        try{let vid=ref
            let video=await navigator.mediaDevices.getUserMedia({video:true})
            vid.srcObject=video
            dispatch(start(true))

    }catch(err){console.log(err)}}
}

    export default VidReducer