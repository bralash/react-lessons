import React, { Component } from 'react'
import AppTitle from '../components/AppTitle'

class Home extends Component {
    state = {
        posts: []
    }
    render() {
        
        return (
            <div>
                <AppTitle {...this.props} title="Welcome Home" />
                
            </div>
        )
    }

    
}

export default Home
