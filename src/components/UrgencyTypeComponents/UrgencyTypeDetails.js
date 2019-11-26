import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUrgencyTypesById } from "../../actions/urgencyTypes";
import UrgencyTypeItem from "./UrgencyTypeItem";

class UrgencyTypeDetails extends Component {
	componentDidMount() {
		if (this.props.id) {
      this.props.fetchUrgencyTypesById(this.props.id);
    }
  }

	render() {
		const result = this.props.urgencyTypes.urgencyTypeById[0]
        if (result != null) {
            return (
                <div>
                    <UrgencyTypeItem item={
                        result
                    }></UrgencyTypeItem>
                    <p>
                      <Link to="/urgencytypes">Back</Link>
                  </p>
                </div>
            )
        }
    return null
  }

}

const mapDispatchToProps = dispatch => ({
  fetchUrgencyTypesById: (id) => (dispatch(fetchUrgencyTypesById(id)))
});

const mapStateToProps = state => ({
  urgencyTypes: state.urgencyTypes
});

export default connect(mapStateToProps,mapDispatchToProps)(UrgencyTypeDetails);
