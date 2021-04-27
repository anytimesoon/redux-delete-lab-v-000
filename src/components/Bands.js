import React, {Component} from 'react'
import Band from './Band'
import {connect} from 'react-redux'

class Bands extends Component {
	renderBands = () => { 

		return this.props.bands.map(band => <Band key={band.id} name={band.name} id={band.id}/>)
	}

	render(){
		return(
			<div>
				{this.renderBands()}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		bands: state.bands
	}
}

export default connect(mapStateToProps)(Bands)
