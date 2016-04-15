import React from 'react';
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			txt: 'This is the state text.',
			cat: 0
		}
		this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({txt: e.target.value})
	}
	render(){
		return (
			<div>
				<Widget txt={this.state.txt} update={this.update} />
			</div>
		)
	}
}

const Widget = (props) => {
	return (
		<div>
			<input type="text" onChange={props.update} />
			<p>{props.txt}</p>
		</div>
	)
}

export default App