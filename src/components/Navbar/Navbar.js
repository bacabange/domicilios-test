import React, { Component } from 'react';
import styles from './Navbar.scss';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <nav className={styles.navbar}>
                <div className={styles.item, styles.leftContent}></div>

                <div className={styles.item, styles.title}>
                    <span>Domicilios.com</span>
                </div>

                <div className={styles.item, styles.rightContent}>
                    <p>Stiven</p>
                </div>
            </nav>
        )
    }
}

export default Navbar;