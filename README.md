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

      
   Reducer 
   
      * a function Reducer (previousState, action){} - produces new state
      * immutable 
      
   Store 
   
      * updates all listeners - broadcasts to all listeners
      * contains state
      * only reducers can change the state
      
      
   
             
