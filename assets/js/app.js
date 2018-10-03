import 'phoenix_html';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Splash from './splash';

class App extends Component {
  render() {
    return <Splash />;
  }
}
ReactDOM.render(
  <App />,
  document.getElementById("app")
)
