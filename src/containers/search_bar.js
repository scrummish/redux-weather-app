import React, { Component } from 'react';

export default class SearchBar extends Component {
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