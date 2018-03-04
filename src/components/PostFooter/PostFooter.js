import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';

import styles from './PostFooter.scss';

class PostFooter extends Component {
    constructor(props) {
        super(props);

        this.state = { }
    }

    toggleModal = () => {
        this.props.click();
    }

    render() {
        return (
            <div>
                <div className={ styles.container }>
                    <div className={ styles.toolbar }>
                        <div className={ styles.item } onClick={ this.toggleModal }>
                            <span className={ styles.blue }></span>
                            <span className={ styles.red }></span>
                            <span className={ styles.yellow }></span>
                        </div>

                        <div className={ styles.comments }>
                            <a href="#">3 Comments</a>
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <a href="#">Reaccionar</a>
                        <a href="#">Comentar</a>
                    </div>
                </div>

            </div>
        )
    }
}


PostFooter.propTypes = {
    // title: PropTypes.string.isRequired,
    // type: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
}

export default PostFooter;