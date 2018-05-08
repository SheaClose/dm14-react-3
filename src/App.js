import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    console.log("constructor");
  }

  componentDidMount() {
    let promise = axios.get("https://jsonplaceholder.typicode.com/posts");
    promise.then(response => {
      this.setState({ posts: response.data });
    });
  }

  render() {
    console.log(this.state);
    let posts = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p> {post.body} </p>
        <hr />
      </div>
    ));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {posts}
      </div>
    );
  }
}

export default App;
