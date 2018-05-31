import React from 'react'
import Modal from 'react-modal'
import Link from 'gatsby-link'

if (typeof window !== `undefined`) {
  Modal.setAppElement('#___gatsby')
}

const customStyles = {
  overlay: {
    zIndex: '4',
    backgroundColor: 'rgba(85, 85, 85, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '20rem',
    minHeight: '10rem',
    backgroundColor: '#1f1f1f', // TODO: Figure out the background color we want to be using
  },
}

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
    this.setState({ isModalOpen: true })
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <header id="header">
        <nav>
          <ul>
            <li className="menu"><a onClick={this.openModal}>Menu</a>
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/talks">Talks</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Modal
          isOpen={this.state.isModalOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Navigation Menu"
          style={customStyles}
        >
          <nav>
            <ul>
              <li><Link to="/" onClick={this.closeModal}>Home</Link></li>
              <li><Link to="/portfolio" onClick={this.closeModal}>Portfolio</Link></li>
              <li><Link to="/talks" onClick={this.closeModal}>Talks</Link></li>
              <li><Link to="/contact" onClick={this.closeModal}>Contact</Link></li>
            </ul>
          </nav>
        </Modal>
      </header>
    )
  }
}

export default Header
