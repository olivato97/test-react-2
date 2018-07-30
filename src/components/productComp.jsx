import React from 'react';
import axios from 'axios';

export default class FetchDemo extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        debugger
        // axios.get(`https://jsonplaceholder.typicode.com/posts`)

        //     .then(res => {

        //         const posts = res.data
        //         this.setState({ posts });
        //     });




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
        // async function getUser() {
        //     try {
        //       const response = await axios.get('http://localhost:3004/posts?id=4');
        //       console.log(response);
        //     } catch (error) {
        //       console.error(error);
        //     }
        //   }

        //   getUser()

    }

    render() {
        return (
            <div>
                <h1>{`/r/${this.props.subreddit}`}</h1>
                <ul>
                    {this.state.posts.map(post =>
                        <li key={post.id}>{post.title}</li>
                    )}
                </ul>
            </div>
        );
    }
}
