let initstate={
    massages:[
        {massage:'barev',yuy:false,id:0},
        {massage:'eys ej@ der porcnakan e spaseq',yuy:false,id:1},
        
    ],

    friends:[
        {
            id: 0,
            name: 'igor',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBUo-cUMkfBxNHAOIqn1SpWdwUO2PtaLeow&usqp=CAU"
        },
        {
            id: 1,
            name: 'svetlana',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUotrftqf2I4VZGoMJ_syBn13Qw_4dx5K-aQ&usqp=CAU"
        },
        {
            id: 2,
            name: 'buzdar',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo0GPRoKw3M8gf4WSO5vtMG3YbwGVDFZdlBQ&usqp=CAU"
        },
        {
            id: 3,
            name: 'xarib',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_c9tx0ia12yKYMtBfrezuueBE3udVVlxmDw&usqp=CAU"
        },
        {
            id: 4,
            name: 'sergei',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JBcFFJoQ1SPlF5jnVoqK0G-mL7EXVCcyqw&usqp=CAU"
        },
        {
            id: 5,
            name: 'filip',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7XXRpexnJt0HvmMOh8WIx3zWdu8XluBqNQ&usqp=CAU"
        }
        ]

   
}
const addmas='massage/ADD-MASAGE'


const dialogsReducer=(state = initstate,action)=>{

   
   switch(action.type){
    case addmas:{
        let massi={massage:action.data,yuy:true,id:state.massages.length};
        return  {...state,
            massages:[...state.massages,massi]}
            }
    

default: return state

   }
   
    }

    

export function newmassage(data){
    return {type:addmas, data}
}

    export default dialogsReducer

