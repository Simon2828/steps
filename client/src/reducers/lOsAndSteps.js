import { LOS_AND_STEPS } from '../types/lOsAndSteps';
import { EDIT_LO } from '../types/editLo';

const initState = [];

export default (state = initState, action) => {
	switch (action.type) {
		case LOS_AND_STEPS:
			return [...state, action.payload];
		case EDIT_LO:
			let editedLo = state.map((los, index) => {
				if (Number(los[index].index) != action.id) {
					return los;
				}
				else {
					return los.map((obj, i) => {
						if (i != action.id) {
							return obj
						}
						return { ...obj, ...{ lO: action.payload } }
					})

				}
			}
			)

			return [
				...state, ...editedLo
			]



		default:
			return state
	}
}

