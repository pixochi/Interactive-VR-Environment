import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

import { transformByValue } from '../utils/elements/transform';

class Button extends Component {

    constructor(props) {
        super(props);
        this.backSideRotation = transformByValue(props.rotation, '0 180 0');
    }

    render() {
        const { 
            background, 
            backVisible,
            color, 
            fontSize, 
            position,
            rotation,
            value,
            height,
            width,
            onClick 
        } = this.props;

        return (
            <Entity>
                <Entity
                    primitive="a-plane"
                    position={position}
                    rotation={rotation}
                    color={background}
                    width={width}
                    height={height}
                    events={{
                        click: onClick
                    }}
                >

                <Entity 
                    primitive="a-text"
                    value={value}
                    align="center"
                    color={color}
                    width={fontSize}
                />
                </Entity>

                {
                    backVisible &&
                    <Entity
                        primitive="a-plane"
                        position={position}
                        rotation={this.backSideRotation}
                        color={background}
                        width={width}
                        height={height}
                        events={{
                            click: onClick
                        }}
                    />
                }
            </Entity>
        )
    }
}

Button.propTypes = {
    backVisible: PropTypes.bool,
    background: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.number,
    height: PropTypes.number,
    position: PropTypes.string,
    rotation: PropTypes.string,
    value: PropTypes.string,
    width: PropTypes.number,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    backVisible: true,
    background: 'red',
    color: 'white',
    fontSize: 3,
    height: 0.3,
    position: '1 1.6 -2',
    rotation: '0 0 0',
    value: '',
    width: 1,
    onClick: (e) => console.log('clicked',e.target.components.position.data),
}

export default Button;