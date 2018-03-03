import React, { Component } from 'react';
import styles from './TextBox.scss';

import Button from '../Button/Button';
import Modal from '../Modal/Modal';

class TextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenOverlay: false
         }

        this.toogleModal = this.toogleModal.bind(this);
    }

    toogleModal = () => {
        console.log('Toogle hp');
        let isOpenOverlay = this.state.isOpenOverlay;

        this.setState({
            isOpenOverlay: !isOpenOverlay
        });
    }

    savePost = () => {
        console.log('Guardando');
    }

    render() {
        const inputVsibility = this.state.isOpenOverlay ? {zIndex: '99999'} : {zIndex: '1'};

        return (
            <div>
                {
                    this.state.isOpenOverlay ?
                        <Modal click={ this.toogleModal } visible={ this.state.isOpenOverlay } />
                    :
                        <div className={ styles.container__close } onClick={ this.toogleModal } style={ inputVsibility }>
                            <p>Escribe aquí tu post</p>
                        </div>
                }
            </div>
        )
    }
}

export default TextBox;