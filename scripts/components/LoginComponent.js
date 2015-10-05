var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {error: null}
  },
	render: function() {
    var errorElement = null;
    if(this.state.error) {
      errorElement = (
        <p className="red">{this.state.error}</p>
      );
    }
		return (
			<div className="container">
				<div className="row">
					<h1>Login</h1>
          {errorElement}
          <form onSubmit={this.onLogin}>
            <input type="text" ref="email" placeholder="Email" />
            <input type="password" ref="password" placeholder="Password"/>
            <button type="submit" className="btn">Login</button>
          </form>
				</div>
			</div>
		);
	},
  onLogin: function(e){
    var self = this;
    e.preventDefault();
    var pass = this.refs.password.getDOMNode().value;
    var username = this.refs.email.getDOMNode().value;
    Parse.User.logIn(username, pass,
        {
        success: function(user) {
          self.props.router.navigate('dashboard', {trigger: true});
        },
        error: function(user, err){
          self.setState({
            error: err.message
          });
        }
      }
    );
  }
});
