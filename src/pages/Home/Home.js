import React, { Component } from 'react';
import styles from './Home.scss';

import Navbar from '../../components/Navbar/Navbar';
import TextBox from '../../components/TextBox/TextBox';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className={ styles.container }>
          <TextBox />
        </div>
      </div>
    );
  }
}

export default Home;
