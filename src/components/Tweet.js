import React, { Component } from "react"

class Tweet extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log('[Tweet.js] constructor')
    //     this.state = {}
    // }

    // static getDerivedStateFromProps(props,state) {
    //     console.log('[Tweet.js] getDerivedStateFromProps')
    //     return state;
    // }

    render() {
        // console.log('[Tweet.js] render')
        return (
            <div className="Tweet">
                <div className="tweet-avi">
                    <img src={this.props.avi} alt="" />
                </div>
                <div className="tweet-body">
                 <div>{this.props.displayName}</div> 
                 <a href="https://google.com">{this.props.username}</a>
                 <p>{this.props.children}</p>
             </div>
            </div>
        )
    }

    // componentDidMount() {
    //     console.log('[Tweet.js] componentDidMount')
    // }
}





export default Tweet
