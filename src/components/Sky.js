import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

class Sky extends Component {
    render() {
        const { color } = this.props;

        return (
            <Entity 
                primitive="a-sky"
                color={color}
            />
        )
    }
}

Sky.propTypes = {
    color: PropTypes.string,
}

Sky.defaultProps = {
    color: 'black',
}

export default Sky;
