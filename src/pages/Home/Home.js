import React, { Component } from 'react';
import styles from './Home.scss';

import Navbar from '../../components/Navbar/Navbar';
import TextBox from '../../components/TextBox/TextBox';
import Post from '../../components/Post/Post';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className={ styles.container }>
          <TextBox />

          <div className={styles.posts}>
            <Post />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
