import React from 'react';
import BlogForm from './BlogForm';
import { connect, } from 'react-redux';
import { Button, Card, Container, Header, Icon } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import { getBlogs, } from '../reducers/blogs';


class Blogs extends React.Component {
  state = { showForm: false, };

  componentDidMount() {
    this.props.dispatch(getBlogs());
  }

  blogs = () => {
    return this.props.blogs.map(blog => (
      <Card raised
        color='blue'
        key={blog.id}>
        <Card.Content>

          <Card.Header style={{ fontFamily: "Charm", }}>
            {blog.name}
          </Card.Header>
          <br />
          <div style={{ fontFamily: "Charm", }}>
            Blog Post:
            </div>
          <Card.Description style={{ fontFamily: "Charm", }}>
            "<i>{blog.body}</i>"
        </Card.Description>
        </Card.Content>
        <Card.Content extra style={{ fontFamily: "Charm", }}>
          <Link to={`/blogs/${blog.id}`}>
          <Button.Content>
            View Blog
          </Button.Content>
            </Link>
        </Card.Content>
      </Card>
    ))
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });

  render() {
    const { showForm, } = this.state;
    return (
      <Container>
        <Header as='h1'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: '"Charm", cursive'
          }}>
          Blogs
            </Header>
        <hr />
        <br />
        <div style={{
          display: 'flex',
        }}>
          <br />
            <div>

              {
                showForm ? 
                <Button onClick={this.toggleForm}
                basic
                color='black'
                style={{ fontFamily: "Charm", }}
                animated='fade'>
                <Button.Content visible>
                Cancel 
                </Button.Content>
            <Button.Content hidden>
              <Icon name='cancel' />
            </Button.Content>
                </Button>
                
                :
                <Button onClick={this.toggleForm}
                basic
                color='black'
                style={{ fontFamily: "Charm", }}
                animated='fade'>

              <Button.Content visible> 
              Add Blog  
            </Button.Content>
            <Button.Content hidden>
              <Icon name='edit' />
            </Button.Content>
                </Button>
            }
            </div>
            {/* <Link to={'/blogform'}>
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
          </Link> */}
        </div>
        <br />
        <br />
        {
          showForm ?
            <BlogForm closeForm={this.toggleForm} />
            :
            <Card.Group itemsPerRow={4}>
              {this.blogs()}
            </Card.Group>
        }
      </Container>
    )
  }
}



const mapStateToProps = (state) => {
  return { blogs: state.blogs, };
}

export default connect(mapStateToProps)(Blogs);