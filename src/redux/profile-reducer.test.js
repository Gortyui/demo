import profileReducer, { add, deletePost } from "./profile-reducer";

let state={
    posts:[   
      {post:'miyujje', id:0,like:0},
      {post:'miyujjr', id:1 ,like:0},
      {post:'miyujjererer', id:2,like:0},
      {post:'miyujjtr', id:3 ,like:0},
      {post:'miyujjty', id:4 ,like:0}
 ]}


 test('new post should be added', () => {


  let action=add('miyuk')

      let newState=profileReducer(state,action)
  
      expect(newState.posts.length).toBe(6)
    });
  


      test('after del length will be decrement', () => {


        let action=deletePost(3)
        
        
        
        let newState=profileReducer(state,action)
        
        expect(newState.posts.length).toBe(4)
          });




          test('after del length will not be change if id is incorect', () => {


            let action=deletePost(30000000)
            
            
            
            let newState=profileReducer(state,action)
            
            expect(newState.posts.length).toBe(5)
              });

      