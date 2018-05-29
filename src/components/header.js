import React from 'react'
import Modal from 'react-modal'

if (typeof window !== `undefined`) {
  Modal.setAppElement('#___gatsby');
}

const customStyles = {
  overlay: {
    zIndex                : '4',
    backgroundColor       : 'rgba(85, 85, 85, 0.75)',
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    minWidth              : '20rem',
    minHeight             : '10rem',
    backgroundColor       : 'black',
  }
};

class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      isModalOpen: false,
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
  }

  openModal() {
    this.setState({ isModalOpen: true });
    console.log('opening');
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({isModalOpen: false });
  }

  render() {
    return (
      <header id="header">
        <nav>
          <ul>
            <li className={"menu"}><a href="javascript:;" onTouchEnd={this.openModal} onClick={this.openModal}>Menu</a></li>
            <li><a href="javascript:;">Home</a></li>
            <li><a href="javascript:;">Portfolio</a></li>
            <li><a href="javascript:;">Talks</a></li>
            <li><a href="javascript:;">Contact</a></li>
          </ul>
        </nav>
        <Modal
          isOpen={this.state.isModalOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <nav>
            <ul>
              <li><a href="javascript:;">Home</a></li>
              <li><a href="javascript:;">Portfolio</a></li>
              <li><a href="javascript:;">Talks</a></li>
              <li><a href="javascript:;">Contact</a></li>
            </ul>
          </nav>
        </Modal>
      </header>
    )
  }
}

export default Header
