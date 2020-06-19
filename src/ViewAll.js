import React from 'react'
import ViewEmail from './ViewEmail'

class ViewAll extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showEmail: false
            
        }

    }

    render(){
        let allEmails = this.props.emails.map((emails, index) => 
        <div className='email' id={emails.id} onClick={() => this.setState({showEmail: true})}>
            <div key = {emails.id} className='sender' id={emails.id}>From: {emails.sender.split('@')}</div>
            {/* <div key = {emails.id} className='recipient' id={emails.id}>To: {emails.recipient}</div> */}
            <div key = {emails.id} className='subject' id={emails.id}>Subject: {emails.subject}</div>
            {/* <div key = {emails.id} className='message' id={emails.id}>{emails.message}</div> */}
        </div>)

        return(
            <div className="allEmails">
            <div className='allEmails'>{allEmails}</div>
            <ViewEmail show={this.state.showEmail}/>
            </div>
        )
    }
}

export default ViewAll