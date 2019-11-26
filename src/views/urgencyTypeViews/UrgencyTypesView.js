import React, { Component } from "react";
import UrgencyTypeDetails from "../../components/UrgencyTypeComponents/UrgencyTypeDetails";


export default class UrgencyTypesView extends Component {
	render() {
		return (
			<div>
				<h2> Urgency Type Details</h2>
				<UrgencyTypeDetails id={this.props.match.params.id} />
			</div>
		);
	}
}
