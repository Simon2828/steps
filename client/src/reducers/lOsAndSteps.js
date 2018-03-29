import { LOS_AND_STEPS } from '../types/lOsAndSteps';
import { EDIT_LO } from '../types/editLo';

const initState = [];

export default (state = initState, action) => {
	console.log('state in reducer', state)
	switch (action.type) {
		case LOS_AND_STEPS:
			return [action.payload];

		case EDIT_LO:

			let editedLo = state.map((los, index) => {
				if (Number(los[index].index) != action.id) {
					return los;
				}
				else {
					return los.map(loStepsObj => {
						return loStepsObj.lO;
					})

				}
			}
			)

			return [
				state, ...editedLo
			];





		default:
			return state;
	}
}

