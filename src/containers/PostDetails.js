import axios from 'axios'
import React, { Component } from 'react'
import Post from '../components/Post'

class PostDetails extends Component {
    state = {
        posts: []
    }
   
    render() {
        const post = (
            <Post author={this.state.posts.author} title={this.state.posts.title}>
                {this.state.posts.body}
            </Post>
        )
        return (
            <div className="Posts">
                {post}
            </div>
        )
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(response => {
            const post = response.data;
            const updatedPost = {
                ...post,
                author: 'Lash'
            }
            this.setState({posts: updatedPost})
        })
        .catch(error => {
            console.log('Error')
        })
    }
}

export default PostDetails
