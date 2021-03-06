import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect} from 'react-redux';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { MeetUs } from './MeetUs';
import Login from './Login';
import { SignUp } from './SignUp';
import { NoMatch}  from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Slideshow } from './components/Carousel';
import * as actions from './store/actions/auth';
import AOS from 'aos';

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
            <Layout {...this.props}>
              {console.log(this.props)}
              <Switch>  // Can switch between different routes 
                <Route exact path="/" component={Home} /> 
                <Route path="/meetus" component= {MeetUs} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component= {Login} />
                <Route path="/signup" component={SignUp}/>
                <Route component={NoMatch} /> // this will return a 404 error page */}
              </Switch>
              </Layout>
          </Router>
      </React.Fragment>
    );
  }
}
// converts state from store (react-redux) into properties that can be passed into app
const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}


// maps a method
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
