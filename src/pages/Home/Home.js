import React, { Component } from 'react';
import styles from './Home.scss';

import Navbar from '../../components/Navbar/Navbar';
import TextBox from '../../components/TextBox/TextBox';
import Post from '../../components/Post/Post';

import { getFetch } from '../../actions/postAction';

import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.props.getFetch();
  }

  render() {
    const posts = this.props.posts.map( (value, index) => {
      return (
        <Post key={index} post={value} />
      );
    });

    return (
      <div>
        <Navbar />

        <div className={ styles.container }>
          <TextBox />

          <div className={styles.posts}>
            { posts }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      posts: state.postReducer.posts
  }
};

const mapDispatchToProps = dispatch =>{
  return {
      getFetch: () => dispatch(getFetch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
