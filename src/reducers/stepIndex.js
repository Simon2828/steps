import { SET_INDEX } from '../types/stepIndex';

const initState = {
	index : null
}

export default (state = initState, action) => {
	switch(action.type) {
		case SET_INDEX :
			return {...state, index : action.payload}
		default :
			return state
	}

}