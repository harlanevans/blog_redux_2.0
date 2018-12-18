import React from 'react';
import { connect, } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';

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
    dispatch({ type: "INC_ID" });
    this.setState({ name: "", body: "", })
    this.props.history.push(`/blogs`);
  }

  render() {

    const { name, body, } = this.state;

    return (
      <div>
        <br />
        <h3 style={{
          display: 'flex',
          justifyContent: 'center'
        }}>Add Blog</h3>
        <Form onSubmit={this.handleSubmit}>
        <hr />
          <input
            name='name'
            autoFocus
            value={name}
            placeholder="Name"
            title="Blog"
            onChange={this.handleChange} />
            </Form>
        <Form onSubmit={this.handleSubmit}>
          <input
            name='body'
            value={body}
            placeholder="Body"
            title="Body"
            onChange={this.handleChange} />
        </Form>
        <br />
          <Button onClick={this.handleSubmit}>Submit</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId, };
}

export default connect(mapStateToProps)(BlogForm);