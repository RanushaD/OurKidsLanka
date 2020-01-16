import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect} from 'react-redux';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { MeetUs } from './MeetUs';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { NoMatch}  from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Slideshow } from './components/Carousel';
import * as actions from './store/actions/auth';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      // Creates a wrapper without using div
      <React.Fragment> 
        <NavigationBar {...this.props}/>
          <Router>
              <Switch>  // Can switch between different routes 
                <Route exact path="/" component={Home} /> 
                <Route path="/meetus" component= {MeetUs} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp}/>
                <Route component={NoMatch} /> // this will return a 404 error page */}
              </Switch>
          </Router>
      </React.Fragment>
    );
  }
}
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


const mapStateToProps = state => {
  return {
    isAuthenticated: state.token != null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
