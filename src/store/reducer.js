import * as actionTypes from './actions';

const initialState ={
    counter: 0,
    results : []
}

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.INCREMENT){
        return{
            ...state,
            counter: state.counter +1
        }
    }
    if(action.type === actionTypes.DECREMENT){
        return{
            ...state,
            counter: state.counter - 1
        }
    }
    if(action.type === actionTypes.ADD){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if(action.type === actionTypes.SUBTRACT){
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    if(action.type === actionTypes.STORE_RESULT){

        return {
            ...state,
            results:[... state.results,state.counter]
        }
    }
    if (action.type === actionTypes.DELETE_RESULT){
        return {
            ...state,
            results:state.results.filter((value,index) => action.value!==index)
        }
    }
    console.log("this is not supported action ",action.type)
    return state;
};

export default reducer;