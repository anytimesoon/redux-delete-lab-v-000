import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    	const newBand = {
    		id: uuid(),
    		name: action.name
    	}
      return { ...state, bands: state.bands.concat(newBand) }

    case "DELETE_BAND":
    	return { ...state, bands: state.bands.filter(band => band.id !== action.payload)}

    default:
      return state;
  }
};
