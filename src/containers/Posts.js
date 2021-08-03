import React, { Component } from 'react'
import Post from '../components/Post'
import axios from 'axios'

class Posts extends Component {
    state = {
        posts: []
    }
    render() {
        const posts = this.state.posts.map(post => {
            return (
                <Post to={post.id} key={post.id} title={post.title}>
                    {post.body}
                </Post>
            )
        })
        return (
            <div className="Posts">
                {posts}
            </div>
        )
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({posts: response.data.slice(0,5)})
        })
        .catch(error => {
            console.log('Error')
        })
    }
}

export default Posts
