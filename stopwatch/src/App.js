import './App.css';
import React from 'react';
// import Button from './components/buttons/buttons';
import StopWatch from './containers/stopwatch/stopwatch';
class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <StopWatch />
      </div>
    );
  }
}


export default App;
