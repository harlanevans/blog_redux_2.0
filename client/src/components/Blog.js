import React from 'react';
import BlogForm from './BlogForm';
import { connect, } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBlog, } from "../reducers/blogs";
import { Button, Icon, Container, Header, } from 'semantic-ui-react';

class Blog extends React.Component {
  state = { showForm: false, };

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });


  handleDelete = () => {
    const { blog, dispatch, history: { push, }, } = this.props;
    dispatch(deleteBlog(blog.id));
    push("/blogs");
  }

  render() {
    const { showForm, } = this.state;
    const { blog = {}, } = this.props;

    return (

      <Container>
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
          justifyContent: 'space-between'
        }}>

          <Button basic
            color='black'
            style={{ fontFamily: "Charm", }}
            animated='fade'
            onClick={this.toggleForm}>

            <Button.Content visible>
              {showForm ? "Cancel" : "Edit"}
            </Button.Content>
            <Button.Content hidden >
              <Icon name='edit' />
            </Button.Content>
          </Button>
          {
            showForm ?
              <BlogForm {...blog} closeForm={this.toggleForm} />
              :
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                <Button onClick={this.handleDelete}
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
                <br />
              </div>
          }
        </div>
      </Container>
    )
  }
}


const mapStateToProps = (store, props) => {
  return { blog: store.blogs.find(a => a.id === parseInt(props.match.params.id)) }
}

export default connect(mapStateToProps)(Blog);