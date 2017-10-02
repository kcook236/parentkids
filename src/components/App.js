import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import BaseLayout from './BaseLayout.js';
import ParentComponent from './ParentComponent.js';
import ChildComponent from './ChildComponent.js';
import DisplayComponent from './DisplayComponent.js';




class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <ParentComponent />
        </BaseLayout>
      </div>
    );
  }
}

export default App;
