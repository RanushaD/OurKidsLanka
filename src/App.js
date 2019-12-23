import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact} from './Contact';
import { NoMatch} from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar} from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      // Creates a wrapper without using div
      <React.Fragment> 
        <NavigationBar/>
        <Jumbotron/>
        <Layout>
          <Router>
            <Switch>  // Can switch between different routes 
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} /> // this will return a 404 error page
            </Switch>
          </Router>
        </Layout>
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

export default App;
