import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    

    render () {
        let listElements = this.props.storedResults.map( (e,i)=> <li key={i}  onClick={this.props.onDleteResult} >{e}</li>)
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
        onIncrementCounter : ()=> dispatch({type:'INCREMENT'}),
        onDecrementCounter : ()=> dispatch({type:'DECREMENT'}),
        onAddValueToCounter: (value)=> dispatch({type:'ADD',value: value}),
        onSubtractValueFromCounter: (value)=> dispatch({type:'SUBTRACT',value:value}),
        onStoreResult: (value)=> dispatch({type:'SOTRE_RESULT'}),
        onDleteResult: (value)=> dispatch({type:'DELETE_RESULT'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);