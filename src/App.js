import React, { Component } from 'react';
import './App.css';
import TechList from './TechList/TechList'
import Summary from './Summary/Summary'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  //updates state with a new item corresponding to a key if selected
  updateFeature = ((feature, newValue) => {
      const selected = Object.assign({}, this.state.selected);
      selected[feature] = newValue;
      this.setState({
        selected
      });
  })

  render() {      

    return (
      <div className="App">
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>  
        </header>      
        <main>
          <TechList 
            features={this.props.features}
            updateFeature={this.updateFeature}
            selected={this.state.selected}
          />
          <Summary selected={this.state.selected}/>
        </main>
      </div>
    );
  }
}

export default App;  
