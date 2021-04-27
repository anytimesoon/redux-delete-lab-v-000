import React, { Component } from 'react';
import {connect} from 'react-redux';

class Band extends Component {

  render() {
    return(
      <li>
        {this.props.name} <button onClick={() => this.props.deleteBand(this.props.id)}>delete me</button>
      </li>
    );
  }
};

const mapDispatchToProps = dispatch => {
	return {
	  deleteBand: id => dispatch({ type: "DELETE_BAND", payload: id})
	}
}

export default connect(null, mapDispatchToProps)(Band);
