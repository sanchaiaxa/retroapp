/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const style = {
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  validateInputBlank() {
    const value = this.refs.displayNameField.getValue();
    if(value.trim() === "")
      return true;
    else
      return false;
  }

  handleLogin() {
  	alert('Login');
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>Retrospective Application</h1>
          <h2>example project</h2>
          <Paper style={style} zDepth={1} >
            <TextField
              hintText="Peterpan"
              floatingLabelText="Display Name"
              ref="displayNameField"
            />
            <div style={{marginUp: 20}}>
              <RaisedButton label="Login" style={{margin: 12}} secondary={true} onTouchTap={this.handleLogin}/>
            </div>
          </Paper>
        </div>
        
      </MuiThemeProvider>
    );
  }
}

export default Login;