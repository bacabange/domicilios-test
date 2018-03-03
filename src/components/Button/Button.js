import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Button.scss';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = { }
    }

    render() {
        let classes = [styles.btn];

        classes.push(styles[this.props.type]);
        classes.push(styles[this.props.widthParent]);

        return (
            <div>
                <button className={ classes.join(' ') } onClick={ this.props.click }>Hola puto</button>
            </div>
        )
    }
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
}

export default Button;