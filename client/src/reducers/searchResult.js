import { SET_SEARCHRESULT } from '../types/searchResult';

const initState = [];

export default (state = initState, action) => {
	switch(action.type) {
		case SET_SEARCHRESULT :
			return {...state, result: action.payload}
		default :
			return state
	}

}