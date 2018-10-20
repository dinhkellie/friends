import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import * as secrets from './secrets.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    // this.checkLoginState = this.checkLoginState.bind(this);
  }

  componentDidMount() {
    console.log('app id: ' + secrets.appId);
    window.fbAsyncInit = function() {
      FB.init({
        appId            : secrets.appId,
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.1'
      });
    };
 
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  test() {
    FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
       console.log('Good to see you, ' + response.name + '.');
     });
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
    });
  }
  // checkLoginState() {
  //   console.log('hello there');
  //   FB.getLoginStatus(function(response) {
  //     console.log('login state\n' + response);
  //   });
  // }
  
  render() {
    console.log('rendered');
    return <button onClick={this.test}>hello world</button>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

