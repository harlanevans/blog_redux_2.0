import React from 'react';
import { connect, } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBlog, } from "../reducers/blogs";
import { Button, Icon, Container, Header, } from 'semantic-ui-react';

class Blog extends React.Component {
  state = { showForm: false, };


  handleDelete = () => {
    const { blog, dispatch, history: { push, }, } = this.props;
    dispatch(deleteBlog(blog.id));
    push("/blogs");
  }

  render() {
    const { blog = {}, } = this.props;

    return (

      <Container>
        <Header as='h1'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: '"Charm", cursive'
          }}>
          {blog.name}
        </Header>
        <hr />
        <br />
        <p
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: "Charm",
          }}>
          {blog.body}
        </p>
        <br />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>

          <Link to="/blogs">
            <Button
              basic
              color='black'
              style={{ fontFamily: "Charm", }}
              animated='fade'>
              <Button.Content visible>
                Back to All Blogs
           </Button.Content>
              <Button.Content hidden>
                <Icon name='left arrow' />
              </Button.Content>
            </Button>
          </Link>

          <Button onClick={this.handleDelete}
            alignItems='right'
            basic
            color='black'
            style={{ fontFamily: "Charm", }}
            animated='fade'>
            <Button.Content visible>
              Delete Blog
           </Button.Content>
            <Button.Content hidden>
              <Icon name='delete' />
            </Button.Content>
          </Button>
        </div>
      </Container>
    )
  }
}


const mapStateToProps = (store, props) => {
  return { blog: store.blogs.find(a => a.id === parseInt(props.match.params.id)) }
}

export default connect(mapStateToProps)(Blog);