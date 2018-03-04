import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './Comment.scss';

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = { }
    }

    render() {
        const now = moment();
        const date = moment.unix(this.props.date).format("YYYY-MM-DD");

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
                    <span className={styles.time}>{ now.diff(date, 'minutes') } Minutes</span>
                </div>
            </div>
        )
    }
}

Comment.propTypes = {
    name: PropTypes.string.isRequired,
    imageProfile: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired
}

export default Comment;