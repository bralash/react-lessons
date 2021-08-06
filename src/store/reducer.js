import * as actionTypes from './actions'

const initialState = {
    counter: 10,
    appName: 'Counter App',
    appVersion: '1.5'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + action.value
            }
        
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - action.value
            }

        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }

        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        default: return state
    }
}

export default reducer