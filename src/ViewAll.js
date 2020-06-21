import React from 'react'
import ViewEmail from './ViewEmail'
import Modal from 'react-modal'

class ViewAll extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showModal: false,
            emailID: ''
            
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        
      }
      
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }

    

    render(){
        if (!this.state){
            return null
        }
        
        let allEmails = this.props.emails.map((emails, index) => 
            <div className='email' id={emails.id} onClick={() => this.setState({showModal: true, emailID: index})}>
            <div key = {emails.id} className='sender' id={emails.id}>From: {emails.sender.split('@')}</div>
            {/* <div key = {emails.id} className='recipient' id={emails.id}>To: {emails.recipient}</div> */}
            <div key = {emails.id} className='subject' id={emails.id}>{emails.subject}</div>
            {/* <div key = {emails.id} className='message' id={emails.id}>{emails.message}</div> */}
            <div></div>
        </div>)

        return(
            <div className="allEmails">
            <div className='allEmails'>{allEmails}</div>
            <Modal isOpen={this.state.showModal} contentLabel="email" id='modal'>
        
          <button onClick={this.handleCloseModal}>Close Email</button>
            {console.log(this.props.emails.emailID - 1)}
            <ViewEmail email={this.props.emails[this.state.emailID]}/>
            </Modal>
            
        </div>
        )
    }
}

export default ViewAll