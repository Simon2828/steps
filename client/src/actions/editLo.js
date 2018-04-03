import { EDIT_LO } from '../types/editLo';

export const editLo = (data, id) => {
	console.log('data in editLo action', data)
	return dispatch => {
		dispatch({
			type: EDIT_LO,
			id,
			payload: data
		})

	}

}