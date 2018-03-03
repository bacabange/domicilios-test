import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostFooter from '../PostFooter/PostFooter';

import styles from './Post.scss';
import profileImage from '../../assets/images/profile.jpg';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = { }
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                    <div className={styles.profileImage}>
                        <img src={profileImage} alt="Profile"/>
                    </div>

                    <div className={styles.postDetail}>
                        <h2>Stiven Castillo</h2>
                        <span>Hace 2 días</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique architecto, sint fugit eos, unde accusamus aspernatur ex fugiat suscipit voluptatibus repellat</p>
                    </div>
                </div>

                <PostFooter />
            </div>
        )
    }
}

Post.propTypes = {
    // title: PropTypes.string.isRequired,
    // type: PropTypes.string.isRequired,
    // click: PropTypes.func.isRequired
}

export default Post;