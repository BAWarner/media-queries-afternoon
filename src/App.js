import React from 'react';
import './App.scss';
import Header from './components/Header';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';

class App extends React.Component {
  render(){return (
      <div>
        <Header />
        <Services />
        <Portfolio />
        <About />
      </div>
    );
  }
}

export default App;
