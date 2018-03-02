import React, { Component } from 'react';
import styles from './Home.scss';

import Navbar from '../../components/Navbar/Navbar';

class Home extends Component {
  render() {
    return (
      <div className={ styles.app }>
        <Navbar />
      </div>
    );
  }
}

export default Home;
