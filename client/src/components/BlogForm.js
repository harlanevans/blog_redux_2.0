import React from 'react';
import { connect, } from 'react-redux';
import { Form, Button, Container, Icon, Header } from 'semantic-ui-react';
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
    const { dispatch, closeForm, } = this.props;
    const func = this.props.id ? updateBlog : addBlog;
    dispatch(func(blog));
    closeForm();
    debugger
  }

  render() {
    const { name, body, } = this.state;

    return (
      <Container>
        <Header as='h2' style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: '"Charm", cursive'}}>
          Add Blog
        </Header>

        <Form onSubmit={this.handleSubmit} >
          <Form.Input
            name='name'
            autoFocus
            value={name}
            placeholder="Name"
            onChange={this.handleChange} 
            />
          <Form.TextArea
            name='body'
            value={body}
            placeholder="Body"
            onChange={this.handleChange}
          />
          <br />
          <Button onClick={this.handleSubmit}
            basic
            color='black'
            animated='fade'>
            <Button.Content visible style={{ fontFamily: "Charm", }}>
              Submit
            </Button.Content>
            <Button.Content hidden>
              <Icon name='check' />
            </Button.Content>

          </Button>
        </Form>
      </Container>
    )
  }
}


export default connect()(BlogForm);