import { SET_INDEX } from '../types/stepIndex';

export const setStepIndex = (index) => {
	console.log('message in action')
	return dispatch => {

		dispatch({
			type: SET_INDEX,
			payload: {
				index
			}
		})

	}

}