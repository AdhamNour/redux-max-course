const initialState ={
    counter: 0,
    results : []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT'){
        return{
            ...state,
            counter: state.counter +1
        }
    }
    if(action.type === 'DECREMENT'){
        return{
            ...state,
            counter: state.counter - 1
        }
    }
    if(action.type === 'ADD'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if(action.type === 'SUBTRACT'){
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    if(action.type === 'SOTRE_RESULT'){

        return {
            ...state,
            results:[... state.results,state.counter]
        }
    }
    console.log("this is not supported action ",action.type)
    return state;
};

export default reducer;