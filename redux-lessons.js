const redux = require('redux')
const createStore = redux.createStore;

// Reducer 
const initialState = {
    counter: 0
}

const rootReducer = (state = initialState, action) => {
    if(action.type === 'INCREASE_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.payload
        }
    }

    if(action.type === 'REDUCE_COUNTER') {
        return {
            ...state,
            counter: state.counter - action.payload
        }
    }
    return state;
}

// Store
const store = createStore(rootReducer)
console.log('[Store Creation]',store.getState())

// Subscribe
store.subscribe(() => {
    console.log('[Subscription]',store.getState())
});


// Action 
store.dispatch({type: 'INCREASE_COUNTER', payload: 5}) // 5
console.log('[Dispatch]',store.getState())
store.dispatch({type: 'REDUCE_COUNTER', payload: 1}) // -1



