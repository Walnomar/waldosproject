import React from 'react';
import WaldosprojectHeader from './components/WaldosprojectHeader'
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Valtteri',
      author:'valtterikayhko'
    }
  }
  render () {
    return (
      <div className="App">
        <WaldosprojectHeader
         author={this.state.author} 
         name={this.state.name} />
      </div>
    );
  }
}

export default App;
