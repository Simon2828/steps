import { LOS_AND_STEPS } from '../types/lOsAndSteps';

const initState = [];

export default (state = initState, action) => {
	switch(action.type) {
		case LOS_AND_STEPS :
			return [...state, action.payload];
		default :
			return state
	}

}