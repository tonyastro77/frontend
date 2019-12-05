import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllUrgencyTypes, deleteUrgency } from '../../actions/urgencyTypes';
import UrgencyTypeListItem from './UrgencyTypeListItem';

class UrgencyTypeList extends Component {
  componentDidMount() {
    this.props.urgencyTypeFetchAll();
  }

  render() {
    return <div>
      <h3>UrgencyType List</h3>
      <ol>{
        this.props.urgencyTypes.urgencyTypeList.map(item =>
          <UrgencyTypeListItem
            key={item.id}
            item={item}
            deleteUrgency={this.props.deleteUrgencyTypeLocal}
          />)
      }</ol>
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  urgencyTypeFetchAll: () => (
    dispatch(fetchAllUrgencyTypes())
  ),
  deleteUrgencyTypeLocal: (id) => (
    dispatch(deleteUrgency(id))
)
});

const mapStateToProps = state => ({
  urgencyTypes: state.urgencyTypes
});

export default connect(mapStateToProps, mapDispatchToProps)(UrgencyTypeList);
