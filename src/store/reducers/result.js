import * as actionTypes from '../actions';


const initialState = {
    results: [],
};

const resultReducer = ( state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date().getTime(), value: action.result})
            };
        case actionTypes.DELETE_RESULT:
            const newArray = state.results.filter(r => r.id !== action.payload.resultElementId);
            return {
                ...state,
                results: newArray,
            }
    }
    return state;  // if no cases are present return current state so app doesn't break
};

export default resultReducer
