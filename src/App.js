import React from 'react';
import WaldosprojectHeader from './components/WaldosprojectHeader'
import {
  Input,
  Segment
} from 'semantic-ui-react'
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Valtteri',
      author:'valtterikayhko'
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange (event, data) {
    this.setState({
      name: data.value
    })
  }

  render () {
    console.log(this.state)
    return (
      <div className="App">
        <WaldosprojectHeader
         author={this.state.author} 
         name={this.state.name} 
         />
         <Segment basic>
         <Input 
            label={'Input Form'}
            onChange={this.onChange}
            value={this.state.name}   
         />
         </Segment>
      </div>
    );
  }
}


export default App;
