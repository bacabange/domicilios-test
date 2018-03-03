import React, { Component } from 'react';
import styles from './TextBox.scss';

import Button from '../Button/Button';

class TextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenOverlay: false
         }

        this.openTextarea = this.openTextarea.bind(this);
    }

    openTextarea = () => {
        let isOpenOverlay = this.state.isOpenOverlay;

        this.setState({
            isOpenOverlay: !isOpenOverlay
        })
    }

    savePost = () => {
        console.log('Guardando');
    }

    render() {
        const overleyVsibility = this.state.isOpenOverlay ? {display: 'block'} : {display: 'none'};
        const inputVsibility = this.state.isOpenOverlay ? {zIndex: '99999'} : {zIndex: '1'};

        return (
            <div>
                {
                    this.state.isOpenOverlay ?
                        <div className={ styles.container__open } style={ inputVsibility }>
                            <textarea name="post" id="post" className={styles.input} placeholder="Escribe aquí tu post"></textarea>

                            <Button type="primary" widthParent="block" click={ this.savePost } />
                        </div>
                    :
                        <div className={ styles.container__close } onClick={ this.openTextarea } style={ inputVsibility }>
                            <p>Escribe aquí tu post</p>
                        </div>
                }
                <div className={ styles.overlay } onClick={ this.openTextarea } style={ overleyVsibility }></div>
            </div>
        )
    }
}

export default TextBox;