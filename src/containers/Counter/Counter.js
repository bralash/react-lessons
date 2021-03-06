import React, { Component } from 'react'
import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

class Counter extends Component {
   
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        ctr: store.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => {
            return dispatch({
                type: actionTypes.INCREMENT,
                value: 1
            })
        },
        onDecrementCounter: () => {
            return dispatch({
                type: actionTypes.INCREMENT,
                value: 1
            })
        },
        onAddCounter: () => dispatch({type: 'ADD',value: 5}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', value: 5})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
