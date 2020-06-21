import React from 'react';
import logo from './logo.svg';
import './App.css';
import ViewAll from './ViewAll'



class App extends React.Component {
  
    
        state = {emails: [],
                 searchReturn: [],
                 typed: "",
                 submit: "",
                 isSearched: false,  
                }
      

      async componentDidMount(){
        const response = await fetch('http://localhost:3001/emails')
        const json = await response.json()
        this.setState({emails: json})
      }

      handleChange = (event) => {
        event.preventDefault()
        this.setState({typed: event.target.value})
      }

      handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.isSearched === true && this.state.typed === ''){
          this.setState({isSearched: false})
        }
        else{
        let check = 0
        let returnArr = this.state.emails.filter(email =>
          Object.keys(email)
          .some(key => email[key].toString().toLowerCase().includes(this.state.typed.toLowerCase())))
        
        this.setState({searchReturn: returnArr, isSearched: true})
        }
      }
      
      
render() {
  if (!this.state.emails[0]){
    return null
  }

  let returnedData

    if (this.state.isSearched){
      returnedData = this.state.searchReturn
    }
    else{
      returnedData = this.state.emails
    }
  
  return (
    <div className="App">
      <header className="App-header">
        <nav className="searchBar">
                    
            <div><h3>Mock-Mail</h3></div>
            <form onSubmit={this.handleSubmit}>
                <label>
                <textarea value={this.state.newValue} 
                //onChange stores the present value, as the user types in the submit box
                onChange={this.handleChange} />
                </label>
                <input type="submit" value="Search"  />
            </form>
        </nav>
        <ViewAll emails={returnedData}/>
        
      </header>
    </div>
  );
}
}

export default App;
