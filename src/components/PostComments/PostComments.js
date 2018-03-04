import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';

import styles from './PostComments.scss';
import profileImage from '../../assets/images/profile.jpg';

class PostComments extends Component {
    constructor(props) {
        super(props);

        this.state = { }
    }

    render() {
        const comments = this.props.comments.map((value, index) => {
            return(
                <Comment key={index} name={value.user.name} imageProfile={profileImage} comment={value.text} date={value.date} />
            );
        });

        return (
            <div className={ styles.container }>
                {comments}
                <textarea className={styles.input} placeholder="Escribe tu comentario"></textarea>
            </div>
        )
    }
}

PostComments.propTypes = {
    comments: PropTypes.array.isRequired,
    // type: PropTypes.string.isRequired,
    // click: PropTypes.func.isRequired
}

export default PostComments;