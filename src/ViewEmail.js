import React from 'react'
import Modal from 'react-modal'

class ViewEmail extends React.Component{
constructor (props){
    super(props)
    this.state = {
        showModal: false
      };
      
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
    
    return(
    <div>
        <Modal isOpen={this.state.showModal} contentLabel="email">
        
          <button onClick={this.handleCloseModal}>Close Email</button>
          <

        </Modal>
      </div>
    )
}
}

export default ViewEmail