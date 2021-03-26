import * as actionTypes from '../actions';

const initialState ={
    results : []
}

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.STORE_RESULT){

        return {
            ...state,
            results:[... state.results,action.counter]
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