import React from 'react';
import { connect, } from 'react-redux';
import { Form, Button, Container, Icon } from 'semantic-ui-react';
import { addBlog, updateBlog } from '../reducers/blogs';

class BlogForm extends React.Component {
  initialState = { 
    name: '', 
    body: '', 
  };

  state = { ...this.initialState, };

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props, });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const blog = { ...this.state };
    const { dispatch, closeForm, push} = this.props;
    const func = this.props.id ? updateBlog : addBlog;
    dispatch(func(blog));
    closeForm();
    push("/blogs");
  }

  render() {

    const { name, body, } = this.state;

    return (
      <div>
        <br />
        <h3 style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: '"Charm", cursive'

        }}>Add Blog</h3>
        <Container>
          <Form onSubmit={this.handleSubmit} >

            <Form.Input
              style={{ fontFamily: "Charm", }}
              name='name'
              autoFocus
              value={name}
              placeholder="Name"
              title="Blog"
              onChange={this.handleChange} />
            <Form.TextArea
              style={{ fontFamily: "Charm", }}
              name='body'
              value={body}
              placeholder="Body"
              title="Body"
              onChange={this.handleChange}
            />
            <br />
          <Button onClick={this.handleSubmit}
            basic
            color='black'
            animated='fade'
            >
            <Button.Content visible style={{ fontFamily: "Charm", }}>
              Submit
            </Button.Content>
            <Button.Content hidden>
              <Icon name='check' />
            </Button.Content>
          </Button>
            </Form>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state };
}

export default connect(mapStateToProps)(BlogForm);