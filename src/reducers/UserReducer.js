import {
      NEW_DECK_LIST,
      GET_DECK_LIST
} from '../actions/UserActions';

const initialState ={
      newDeckList:[],
      deckList:[],
}


export default (state=initialState,action) =>{
    switch (action.type) {
          case NEW_DECK_LIST:
                return Object.assign({},state,{
                      newDeckList: action.payload,
                });
          case GET_DECK_LIST:
               return Object.assign({},state,{
                        deckList:action.payload,
                  })
          default:
               return state;
    } ; 
};
