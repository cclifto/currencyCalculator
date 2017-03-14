import React from "react"
import Header from "./header"
import ScrollBox from './scrollBox'
import Buttons from './buttons'
import STORE from '../store'

var AppView = React.createClass({	
	componentWillMount: function() {
		STORE.on("STOREChange",()=>{
			this.setState(STORE._getData())
		})
	},
			// this.state.choices.buttonValue
		
		// start subscribing to the event that's broadcast by the store. 

		// when you hear the right event name, run a function that will call setState on this component.

//get initial state needs to return the object that becomes the state of the component

	getInitialState: function() {
		return STORE._getData()
	},

	render: function(){
		console.log(this.state)
		// FIRST, BEFORE ANY OTHER WORK
		// you need to champagne-waterfall your initial state down to the components that need it
		// and render accordingly in those components.
		return (
			<div className="list-view">
				<Header />
				<ScrollBox display_text={this.state.display_text}/>
				<Buttons choices={this.state.choices}/>
				<nav>
					<a href="http://www.connerclifton.com">connerclifton.com</a>
					<a href="http://facebook.com/connerclifton">facebook</a>
					<a href="https://github.com/cclifto/busRideSimulator">github</a>
					<a href="http://instagram.com/coonerqueefton">instagram</a>
					<a href="mailto:cliftonconner@gmail.com">email me</a>
				</nav>
			</div>
		)
	}
})


export default AppView