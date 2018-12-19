import React from 'react';
import { connect, } from 'react-redux';
import { Form, Button, Container, Icon } from 'semantic-ui-react';

class BlogForm extends React.Component {
  state = { name: "", body: "", };

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value });
  }
  

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id, } = this.props;
    const { name, body, } = this.state;
    const blog = { name, body, id, };
    dispatch({ type: "ADD_BLOG", blog: { name, body } });
    this.setState({ name: "", body: "", })
    this.props.history.push(`/blogs`);
  }

  render() {

    const { name, body, } = this.state;

    return (
      <div>
        <br />
        <h3  style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: '"Charm", cursive'
          
        }}>Add Blog</h3>
        <Container>
          <Form>

        <Form.Input 
        onSubmit={this.handleSubmit}
        style={{fontFamily: "Charm",}}
            name='name'
            autoFocus
            value={name}
            placeholder="Name"
            title="Blog"
            onChange={this.handleChange} />
        <Form.TextArea onSubmit={this.handleSubmit}
        style={{fontFamily: "Charm",}}
            name='body'
            value={body}
            placeholder="Body"
            title="Body"
            onChange={this.handleChange} 
            />
        <br />
            </Form>
          <Button onClick={this.handleSubmit}
         basic 
          color='black' 
          animated='fade'
          >
          <Button.Content visible style={{fontFamily: "Charm",}}>
            Submit
            </Button.Content>
          <Button.Content hidden>
           <Icon name='check' />
            </Button.Content>
            </Button>
            </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId, };
}

export default connect(mapStateToProps)(BlogForm);