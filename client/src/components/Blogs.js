import React from 'react';
import Blog from './Blog';
import { connect, } from 'react-redux';
import { Button, Card, Container, Header } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import { getBlogs, } from '../reducers/blogs';


class Blogs extends React.Component {

  componentDidMount() {
    this.props.dispatch(getBlogs());
  }

  blogs = () => {
    return this.props.blogs.map(blog => (
      <Card color='blue' key={blog.id}>
        <Card.Content>

          <Card.Header>
            {blog.name}
          </Card.Header>
          <br />
          Blog Post:
        <Card.Description>
            "<i>{blog.body}</i>"
        </Card.Description>
        </Card.Content>
          <Card.Content extra >
            <Link to={`/blog/${blog.id}`}>
              View Blog
            </Link>
          </Card.Content>
      </Card>
    ))
  }


  render() {
    return (
      <Container>
        <Header as='h1'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: '"Charm", cursive'
          }}
        >Blogs</Header>
        <hr />
        <br />
        <Link to={'/blogform'}>
          <Button
          >Add a Blog Post</Button>
        </Link>
        <br />
        <br />
        <Card.Group itemsPerRow={3}>
          {this.blogs()}
        </Card.Group>
      </Container>
    )
  }
}



const mapStateToProps = (state) => {
  return { blogs: state.blogs, };
}

export default connect(mapStateToProps)(Blogs);