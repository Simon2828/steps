import {SET_SEARCHRESULT} from '../types/searchResult';

export const setSearchResult = (result) => {
    console.log('here')
    return dispatch => {
        dispatch({
            type: SET_SEARCHRESULT,
            payload: result
        }) 
    }
}