import React from 'react';
import { connect, } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Segment, Container, Header } from 'semantic-ui-react';


const Blog = ({ blog = {} }) => (
  <Container>
        {blog.name}
      {blog.body}
  </Container>
)

const mapStateToProps = (store, props) => {
  return { blog: store.blogs.find(a => a.id === parseInt(props.match.params.id)) }
}

export default connect(mapStateToProps)(Blog);