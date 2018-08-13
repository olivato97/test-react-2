import React from 'react';
import axios from 'axios';

export default class FetchDemo extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        // Make a request for a user with a given ID
        axios.get(`http://localhost:3004/posts`)
            .then(res => {

                const posts = res.data
                this.setState({ posts });
            })
            .catch (function (error) {
            // handle error
            console.log(error);
        });
        axios.post('http://localhost:3004/posts/4', {
            "id": 4,
            "title": "Test-post",
            "author": "Marco"
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
        });

    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.posts.map(post =>
                        <li key={post.id}>{post.title}</li>
                    )}
                </ul>
            </div>
        );
    }
}
