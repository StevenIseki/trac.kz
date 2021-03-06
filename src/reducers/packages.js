const constants = require('../constants');

const initialState = {
  isFetching: false, 
  tracks: [],
  track: {}
}

function update(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_TRACK:
			console.log(action.json)			
			return Object.assign({}, state, {
				track: action.json
			})

		default:
			return state
  }
}

module.exports = update;
