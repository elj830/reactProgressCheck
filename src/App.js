import React from 'react';
import logo from './logo.svg';
import './App.css';
import ViewAll from './ViewAll'



class App extends React.Component {
  
    
        state = {emails: [],
                    
                    }
      

      async componentDidMount(){
        const response = await fetch('http://localhost:3001/emails')
        const json = await response.json()
        this.setState({emails: json})
      }

      
      
render() {
  if (!this.state.emails[0]){
    return null
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <ViewAll emails={this.state.emails}/>
        
      </header>
    </div>
  );
}
}

export default App;
