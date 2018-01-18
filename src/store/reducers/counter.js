import * as actionTypes from '../actions';


const initialState = {
    counter: 0,
};

const counterReducer = ( state = initialState, action) => {

    switch (action.type) {  //checking to see if action.type is equal our cases
        case actionTypes.INCREMENT:  // pulled from our action types and converted into a string
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

    }

    return state;  // if no cases are present return current state so app doesn't break
};

export default counterReducer;
