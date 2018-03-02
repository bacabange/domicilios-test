import React, { Component } from 'react';
import styles from './TextBox.scss';

class TextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

        this.openTextarea = this.openTextarea.bind(this);
    }

    openTextarea = () => {
        console.log('Opening');
    }

    render() {
        return (
            <div className={styles.container} onClick={this.openTextarea}>
                <p>Escribe aquí tu post</p>
                {/* <textarea name="post" id="post" className={styles.input}>Escribe aquí tu estado</textarea> */}
            </div>
        )
    }
}

export default TextBox;