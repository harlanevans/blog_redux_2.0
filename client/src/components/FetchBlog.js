import React from 'react';
import { connect, } from 'react-redux';
import { Route, } from 'react-router-dom';
import Blogs from './Blogs';
import Blog from './Blog';
import { getBlogs, } from '../reducers/blogs';
import { Loader, Segment, Dimmer, } from 'semantic-ui-react';

class FetchBlog extends React.Component {

  componentDidMount() {
    this.props.dispatch(getBlogs());
  }


  render() {
      return (
        <div>
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs/:id" component={Blog} />
      </div>
      )
    }
  }

export default connect()(FetchBlog);