import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button } from '../components';
import { actions as elementActionCreators } from '../ducks/elements';
import { actions as attributeActionCreators } from '../ducks/attributes';
import { Entity } from 'aframe-react';

class Dashboard extends PureComponent {
	render() {
		const { attributes, changeAttribute, createElement } = this.props;

		return (
			<Entity>
				<Button 
					value="Blue color"
					position="0 1.6 -2.5"
					onClick={() => changeAttribute({color: 'blue'})}
				/>

				<Button 
					value="Create element"
					position="1.05 1.6 -2.5"
					onClick={() => createElement(attributes)}
				/>
			</Entity>
		)
	}
}

const mapStateToProps = ({attributes}) => ({
		attributes
})

const mapDispatchToProps = dispatch => (
	bindActionCreators({...elementActionCreators, ...attributeActionCreators}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);