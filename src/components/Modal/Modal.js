import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import styles from './Modal.scss';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: this.props.visible
        }
    }

    close = () => {
        let isOpenOverlay = this.state.isOpen;

        this.setState({
            isOpen: !isOpenOverlay
        });

        this.props.click();
    }

    clickOnButton = () => {
        console.log('click button');
    }

    render() {
        const overleyVsibility = this.state.isOpen ? {display: 'block'} : {display: 'none'};
        const inputVisibility = this.state.isOpen ? {zIndex: '99999'} : {zIndex: '1'};

        return (
            <div>
                <div className={ styles.container__open } style={ inputVisibility }>
                    <textarea name="post" id="post" className={styles.input} placeholder="Escribe aquí tu post"></textarea>

                    <Button title="Publicar" type="primary" widthParent="block" click={ this.clickOnButton } />
                </div>
                <div className={ styles.overlay } onClick={ this.close } style={ overleyVsibility }></div>
            </div>
        )
    }
}

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    click: PropTypes.func.isRequired
}

export default Modal;