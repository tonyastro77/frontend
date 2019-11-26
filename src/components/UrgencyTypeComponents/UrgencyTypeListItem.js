import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import UrgencyTypeItem from './UrgencyTypeItem';

export default class UrgencyTypeListItem extends Component {
  render() {
    return (
      <li>
        <UrgencyTypeItem item={this.props.item} />
        <span></span>
        <Link to={"/urgencyType/" + this.props.item.id}>
          <button>view</button>
        </Link>
        <span></span>
        <button
          onClick={() => {
            this.props.deleteUrgencyTypeClicked(this.props.item.id);
          }}
        >
          DELETE
        </button>
        <hr />
      </li>
    )
  }
}
