import React from 'react'


class ViewEmail extends React.Component{
constructor (props){
    super(props)
    this.state = {
        
      };
    }
    
    
    

render(){
    
    return(
    <div>
        <h1>{this.props.email.subject}</h1>
        <p></p>
        <p>From: {this.props.email.sender}</p>
        <p></p>
        <p>To: {this.props.email.recipient}</p>
        <p></p>
        <p>{this.props.email.message}</p>
      </div>
    )

}
}

export default ViewEmail