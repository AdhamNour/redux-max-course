import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions'

class Counter extends Component {
    

    render () {
        let listElements = this.props.storedResults.map( (e,i)=> <li key={i}  onClick={()=>this.props.onDleteResult(i)} >{e}</li>)
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}   />
                <CounterControl label="Add 5" clicked={() => this.props.onAddValueToCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractValueFromCounter(5)}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {listElements}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => { return { 
    ctr: state.counter,
    storedResults: state.results
}}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : ()=> dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter : ()=> dispatch({type:actionTypes.DECREMENT}),
        onAddValueToCounter: (value)=> dispatch({type:actionTypes.ADD,value: value}),
        onSubtractValueFromCounter: (value)=> dispatch({type:actionTypes.SUBTRACT,value:value}),
        onStoreResult: ()=> dispatch({type:actionTypes.STORE_RESULT}),
        onDleteResult: (value)=> dispatch({type:actionTypes.DELETE_RESULT,value:value}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);