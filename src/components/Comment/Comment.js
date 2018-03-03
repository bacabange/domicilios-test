import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Comment.scss';

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = { }
    }

    render() {
        return (
            <div className={ styles.container }>
                <div className={styles.profileImage}>
                    <img src={this.props.imageProfile} alt="Profile"/>
                </div>

                <div className={styles.detail}>
                    <div className={styles.comment}>
                        <span className={styles.title}>{this.props.name}</span>
                        { this.props.comment }
                    </div>
                    <span className={styles.time}>Hace 3min</span>
                </div>
            </div>
        )
    }
}

Comment.propTypes = {
    name: PropTypes.string.isRequired,
    imageProfile: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired
}

export default Comment;