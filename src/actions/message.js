import { SET_MESSAGE } from '../types/message';

export const setMessage = (message) => {
	console.log('message in action')
	return dispatch => {

		dispatch({
			type: SET_MESSAGE,
			payload: {
				message
			}
		})

	}

}