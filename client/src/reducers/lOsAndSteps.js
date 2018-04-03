import { LOS_AND_STEPS } from '../types/lOsAndSteps';
import { EDIT_LO } from '../types/editLo';

const initState = [];

export default (state = initState, action) => {
	console.log('state', state)
	switch (action.type) {
		case LOS_AND_STEPS:
				return action.payload;

		case EDIT_LO:
			console.log('state in case edit_lo', state)
			let editedLo = state.map((los, index) => {
				if (Number(index) != action.id) {
					return los;
				}
				else {
					return {...los, lO:action.payload};
					

				}
			}
			)

			console.log('editedLo', editedLo);

			return editedLo;

		default:
			return state;
	}
}

