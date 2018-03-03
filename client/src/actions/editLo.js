import { EDIT_LO } from '../types/editLo';

export const storelOsAndSteps = (data) => {
	return dispatch => {

		dispatch({
			type: EDIT_LO,
			payload: data
		})

	}

}