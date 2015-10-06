var React = require('react');
var logButton;
var dashBoard;
module.exports = React.createClass({
	render: function() {
		if (Parse.User.current() !== null){
			logButton = (<a href="#logout" ref="Logout" onClick={this.logout}>Logout</a>);
			dashBoard = (<a href="#dashboard" ref="Dashboard">Dashboard</a>);
		}else{
			logButton =	(<a href="#login" ref="Login">Login</a>);
			dashBoard =	(<a href="#register" ref="Register">Register</a>);
		}
		return (
			<div className="nav-wrapper">
				<a href="#" className="brand-logo left">Login Example</a>
				<ul id="nav-mobile" className="right">
					<li><a href="#">Home</a></li>
					<li ref="logbutton">{logButton}</li>
					<li ref="register">{dashBoard}</li>
				</ul>
			</div>
		);
	},
	logout: function(){
		Parse.User.logOut();
		this.forceUpdate();
	}
})
