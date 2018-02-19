import React, { PureComponent } from 'react';
import { Entity } from 'aframe-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button } from '../components';
import { actions as elementActionCreators } from '../ducks/elements';
import { actions as attributeActionCreators } from '../ducks/attributes';
import { transformByValue } from '../utils/elements/transform';


class WorkSpace extends PureComponent {

	onDragStart = (event) => {
		event.detail.target.removeAttribute('dynamic-body');
	}

	onDragEnd = (event) => {
		const { id, components } = event.detail.target;
		const newPosition = components.position.data;
		this.props.modifyElement(id, { position: newPosition });
	}

	renderElements = () => {
		const { elements } = this.props;

		return Object.keys(elements).map(id => {
			return (
				<Entity
					key={id}
					events={{
						dragstart: this.onDragStart,
						dragmove: this.onDragMove,
						dragend: this.onDragEnd
					}}
					{...elements[id]}
				/>
			)
		});
	}

	render() {
		const { attributes, changeAttribute, createElement } = this.props;

		return (
			<Entity>
				{ this.renderElements() }
			</Entity>
		)
	}
}

const mapStateToProps = ({elements}) => ({
	elements
})

const mapDispatchToProps = dispatch => (
	bindActionCreators({...elementActionCreators, ...attributeActionCreators}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(WorkSpace);