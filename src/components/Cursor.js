import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

class Cursor extends Component {
    render() {
        const { position, rotation, color } = this.props;

        return (
        <Entity 
            primitive="a-camera"
            position={position}
            rotation={rotation}
            static-body={true}
        >
            <Entity
                geometry={{radiusInner:0.005, radiusOuter:0.02}}
                primitive="a-cursor" 
                color={color}
                radius-outer={0.1}
            />
        </Entity>
        )
    }
}

Cursor.propTypes = {
    color: PropTypes.string,
    position: PropTypes.string,
    rotation: PropTypes.string,
}

Cursor.defaultProps = {
    color: 'yellow',
    position: '0 0 0',
    rotation: '0 0 0', 
}

export default Cursor;
