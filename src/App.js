// src/App.js
import { Component } from 'react';
import Post from './components/Post';
import Header from "./components/Header"

class App extends Component {

  render() {

    return (

      <div>

        <Header />

        <div>

          <Post />

        </div>

      </div>

    );

  }

}

export default App;