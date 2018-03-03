import React, { Component } from 'react';

import Comment from '../Comment/Comment';

import styles from './PostComments.scss';
import profileImage from '../../assets/images/profile.jpg';

class PostComments extends Component {
    constructor(props) {
        super(props);

        this.state = { }
    }

    render() {
        return (
            <div className={ styles.container }>
                <Comment name="Stiven" imageProfile={profileImage} comment="Lorem ipsum dolor" />
                <Comment name="Juan" imageProfile={profileImage} comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
                <Comment name="Karen" imageProfile={profileImage} comment="Lorem ipsum dolor, kewm asjnf wert." />

                <textarea className={styles.input} placeholder="Escribe tu comentario"></textarea>
            </div>
        )
    }
}


export default PostComments;