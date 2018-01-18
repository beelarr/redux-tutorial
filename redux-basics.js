const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
};



// Reducer

const rootReducer = (state = initialState, action) =>  {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state, // copy of state and overwrite it with counter
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state
};



// Store
const store = createStore(rootReducer);
console.log(store.getState());



// Subscription

store.subscribe(() => {
    console.log('subscription', store.getState()); // subscription is trigger by action
});



// Dispatch Action

store.dispatch({type: 'INC_COUNTER'}); // type is at my discretion but typically all caps
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());



