import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'

class Post extends Component {
    render() {
        return (
            <article className="Post">
                <NavLink to={'/posts/' + this.props.to}>
                    <h3>{this.props.title}</h3>
                    <span>{this.props.author}</span>
                </NavLink>
                
                <p>{this.props.children}</p>
                
            </article>
        )
    }
}

export default Post
