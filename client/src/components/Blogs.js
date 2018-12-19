import React from 'react';
import Blog from './Blog';
import { connect, } from 'react-redux';
import { Button, Card, Container, Header, Icon } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import { getBlogs, } from '../reducers/blogs';


class Blogs extends React.Component {

  componentDidMount() {
    this.props.dispatch(getBlogs());
  }

  blogs = () => {
    return this.props.blogs.map(blog => (
      <Card raised
      color='blue' 
      key={blog.id}>
        <Card.Content>

          <Card.Header style={{fontFamily: "Charm",}}>
            {blog.name}
          </Card.Header>
          <br />
          <div style={{fontFamily: "Charm",}}>
            Blog Post:
            </div>
        <Card.Description style={{fontFamily: "Charm",}}>
            "<i>{blog.body}</i>"
        </Card.Description>
        </Card.Content>
          <Card.Content extra style={{fontFamily: "Charm",}}>
            <Link to={`/blogs/${blog.id}`}>
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
          <Button basic 
          color='black' 
          animated='fade'
          >
          <Button.Content visible style={{fontFamily: "Charm",}}>
            Add a Blog Post
            </Button.Content>
          <Button.Content hidden>
           <Icon name='add' />
            </Button.Content>
            </Button>
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