import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tumbnails.css';
import Modal from './Modal.jsx';
export class Tumbnails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: null,
            isOpen: false
        }
    }

    toggleModal = (item) => {
        this.setState({
            isOpen: !this.state.isOpen,
            item: item,
        });
    }


    render() {
        const jeweller = this.props.jeweller;
        return (
            <div>
                <div className="container">
                    <div className="grids">
                    {   
                        Object.keys(jeweller).map( (val, index) => {
                       let curentValue = jeweller[val];
                            return (
                                <div className="grid-1" key={index}>
                                    <img alt={curentValue.name} src={curentValue.image} width='250px'
                                        height='200px' onClick={() => this.toggleModal(curentValue)}
                                    />
                                    <span className="tumbnailName">{`The ${curentValue.name}`}</span>
                                </div>)
                        })}
                    </div>
                </div>
                <div>
                {this.state.isOpen ?
                    <Modal show={this.state.isOpen}
                        onClose={this.toggleModal}
                        item={this.state.item}
                        saveItem={(image, item) => this.props.saveItem(image,item)} >
                </Modal>: null }
                </div>
            </div>
        )
    }
}

Tumbnails.propTypes = {
    jeweller: PropTypes.any,
    saveItem: PropTypes.func,
};

export default Tumbnails;

