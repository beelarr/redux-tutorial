import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtract}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(r => (
                        <li key={r.id} onClick={() => this.props.onDeleteResult(r.id)}>{r.value}</li>))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};


const mapDispatchToProps = dispatch => {  // calls dispatch on the store behind the scenes
    return {
        onIncrementCounter: () => dispatch({
            type: 'INCREMENT'
        }),
        onDecrementCounter: () => dispatch({
            type: 'DECREMENT'
        }),
        onAdd: () => dispatch({
            type: 'ADD',
            payload: { value: 10}
        }),
        onSubtract: () => dispatch({
            type: 'SUBTRACT',
            payload: {value: 15}
        }),
        onStoreResult: () => dispatch({
            type: 'STORE_RESULT',
        }),
        onDeleteResult: (id) => dispatch({
            type: 'DELETE_RESULT',
            payload: {resultElementId: id }
        })
    }
};




    //  connect is a function that returns a hoc function that takes our component as an argument
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
