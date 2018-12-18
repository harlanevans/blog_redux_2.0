import React, { Component, Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Blogs from './components/Blogs';
import BlogForm from './components/BlogForm';
import { Container } from 'semantic-ui-react';
import Blog from './components/Blog';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FetchBlog from './components/FetchBlog';


class App extends Component {
  render() {
    return (
      <>
      <NavBar />
        <br />
        <Fragment>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/blogs' component={FetchBlog} />

          </Switch>
        </Fragment>
      </>
    );
  }
}

export default App;
