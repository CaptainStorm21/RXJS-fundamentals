# RXJS-fundamentals


Two way binding 

UI -> 
   <-  controller
   dirty checking ===> basically UI sends to controller .. controller needs to rerender to find an update
   
Unidirection flow 
 
 
                   controller has       storage 
 ui creates item ==>  list items ===> (common component - publish / subscribe) === Payload which is new data
  
 then the stoage notifies the controllers then off to UI (it reads indirectlyy from the storage) ===> storage is changed
 
 Redux 
 
    Action 
    
      * has type 
      * represents intention from our user
          - select type
          - payload -new data
      * is an object
      
      //action

         const action = { 
           type: 'CREATE_ITEM',
           payload: 'new item'
         }

         //action creator 

         create = (item) => 
         ({ type : 'CREATE_ITEM',
            payload: item
         });

         create('item1');
         create('item2');
         create('item3');
         create('item4');
   //output is 
   state [{'0': 'n'}]
   //new tem across 7
      
   Reducer 
   
      * a function Reducer (previousState, action){} - produces new state
      * immutable 
      
//reducer 

         function reducer (prevState, action) {
           switch(action.type){
             case "CREATE_ITEM":
                return [...prevState, {...action.payload} ];
             default:
                return prevState;
           }
         }

         let state = reducer([], {type:'CREATE_ITEM, payload: {title:'new item'}});
         console.log('state', state);  
         
   //new output is  
         state[{title: 'new item'}];
         
  //new record 
  
        state = reducer (state, {type:'CREATE_ITEM, payload: {title:'new item2'}});
         
   //new output is  
   
         state[{title: 'new item'},
                {title: 'new item 2}
         ];
         
   Store 
   
      * updates all listeners - broadcasts to all listeners
      * contains state
      * only reducers can change the state
      
   //store 
      state = {
         list: [],
         user: void 0,
      }
      
   //dispatch 
   
    const  dispatch = (action) => {
    
         //change
         listeners.forEach(element => {
              l();
         });
      }
      let listeners = []
   //select
   const   select = (fn)  => fn(state)
      
      function selector (state) {
         return state.list
      }
      
   //subscribe 
    const  subscribe = (listeners) => {
         listeners.push(listener);
      }
      
   
             
  Summary
  Listener is a view component 
  button function with data is captured and has been encapsulated into an action which is an object
  that action has a type that says create an item but it also has a payload property.
  paypload  consists of data that we ust entered 
  then we take action and we call a recuser
  reducer grabs the previous state and also new action as a paramter
  the job of the reducer is take previous state and this action and merge them together 
  that generates new state of the store..
  now we need to notify all parties that the method change has occured a tthis point we need to broadcast it to any listeners who listens that the change has occured
  Listerns notifies all parties. 
  
         
