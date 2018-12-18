import React from 'react';
import { connect, } from 'react-redux';
import { Route, } from 'react-router-dom';
import Blogs from './Blogs';
import Blog from './Blog';
import { getBlogs, } from '../reducers/blogs';
import { Loader, Segment, Dimmer, } from 'semantic-ui-react';

class FetchApps extends React.Component {
  // state = { loaded: false, };

  componentDidMount() {
    this.props.dispatch(getBlogs(this.setLoaded));
  }

//   setLoaded = () => {this.setState({ loaded: true, });
// }

  render() {
    // const { loaded, } = this.state;
    // if (loaded) {
      return (
        <div>
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs/blog.id" component={Blog} />/>
      </div>
      )
    }
  }

export default connect()(FetchApps);