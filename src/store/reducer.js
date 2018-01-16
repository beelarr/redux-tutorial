import * as actionTypes from './actions';


const initialState = {
    results: [],
};

const reducer = ( state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter -1
            };
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.payload.value
            };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload.value
            };
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result.counter})
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

export default reducer
