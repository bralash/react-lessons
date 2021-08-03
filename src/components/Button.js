import React, { Component } from 'react'

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.sayHello} className="Button">{this.props.title}</button>
        )
    }
}

export default Button
