import React, { Component } from 'react'
import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value="0" />
                <CounterControl label="Increment" />
                <CounterControl label="Decrement" />
                <CounterControl label="Add 5" />
                <CounterControl label="Subtract 5" />
            </div>
        )
    }
}

export default Counter
