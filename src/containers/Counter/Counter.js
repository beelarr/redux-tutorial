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
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
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
        })
    }
};




    //  connect is a function that returns a hoc function that takes our component as an argument
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
