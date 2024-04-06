const initialState = {
    counter: 1,
}

export default function counterReducer(state = initialState, action) {
    switch(action.type) {
        case "counter/increase":
            return {...state, counter: state.counter + action.payload };
        case "counter/decrease":
            return {...state, counter: state.counter - action.payload };
        default: 
            return state;
    }
}

export function increase(amount) {
    return {type: 'counter/increase', payload: amount }
}

export function decrease(amount) {
    return {type: 'counter/decrease', payload: amount }
}




