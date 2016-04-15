import React from 'react';
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			txt: 'This is the state text.',
			cat: 0
		}
	}
	update(e) {
		this.setState({txt: e.target.value})
	}
	render(){
		return (
			<div>
			<input type="text" onChange={this.update.bind(this)} />
			<p>{this.state.txt}</p>
			</div>
		)
	}
}

export default App