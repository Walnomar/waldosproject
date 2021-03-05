import React from 'react';
import SidebarExampleSidebar from './components/SidebarExampleSidebar'
import WaldosprojectHeader from './components/WaldosprojectHeader'
import {
  Input,
  Segment,
  Button,
  Container
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
        <SidebarExampleSidebar/>
          <Segment basic>
          </Segment>
      </div>
    );
  }
}

export default App;