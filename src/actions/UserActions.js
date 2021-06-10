import Axios from 'axios';


export const NEW_DECK_LIST = 'NEW_DECK_LIST';
export const GET_DECK_LIST='GET_DECK_LIST';


export const newDeckList = (data) => async (dispatch) =>{
   Axios
     .get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${data}`)
     .then((res) => {
           dispatch({type:NEW_DECK_LIST,payload:res.data});
           console.log(res);
     }) 
     .catch((err) => {
           console.log(err);
     });
};

export const getDeckList = (id,data) =>async (dispatch) =>{
      Axios
       .get(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=${id}`)
       .then((res) =>{
             dispatch({type:GET_DECK_LIST,payload:res.data});
            console.log(res);
       })
       .catch((err) =>{
             console.log(err);
       });
};