import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import PostFooter from '../PostFooter/PostFooter';
import PostComments from '../PostComments/PostComments';
import Modal from '../Modal/Modal';

import styles from './Post.scss';
import profileImage from '../../assets/images/profile.jpg';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openModalReactions: false
        }
    }

    toggleReactionModal = () => {
        let isOpen = this.state.openModalReactions;

        this.setState({
            openModalReactions: ! isOpen
        });
    }

    render() {
        const now = moment();
        const date = moment.unix(this.props.post.date).format("YYYY-MM-DD");

        console.log(this.props.post);

        return (
            <div className={ styles.mainPost }>
                <div className={ styles.container }>
                    <div className={ styles.profileImage }>
                        <img src={ profileImage } alt="Profile"/>
                    </div>

                    <div className={styles.postDetail}>
                        <h2>{ this.props.post.user.name }</h2>
                        <span>{ now.diff(date, 'minutes')} minutes</span>
                        <p>{ this.props.post.text }</p>
                    </div>
                </div>

                <PostFooter click={ this.toggleReactionModal } />

                <PostComments />
            </div>
        )
    }
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
    // type: PropTypes.string.isRequired,
    // click: PropTypes.func.isRequired
}

export default Post;