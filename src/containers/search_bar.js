import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {
			term: ''
		};
	}
	onInputChange = (e)=>{
		this.setState({term: e.target.value});
	}
	handleFormSubmit = (e)=>{
		e.preventDefault();
		// Fire ActionCreator to make the API request 
		this.props.fetchWeather(this.state.term); // how is it a part of props and not just called as fetchWeather()!!!!
		// Clear the search 
		this.setState({term:''}); 
	}

	render() {
		return(
			<form className="input-group" onSubmit={this.handleFormSubmit}>
				<input placeholder="5 Day forcast" className="form-control" value={this.state.term} onChange={this.onInputChange}/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);







