import React from 'react';
import { connect, } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon, Container, Header, Item } from 'semantic-ui-react';


const Blog = ({ blog = {} }) => (
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
          <Link to="/blogs">
          <Button 
          basic
          color='black'
          style={{fontFamily: "Charm",}} 
          animated='fade'>
           <Button.Content visible>
           Back to All Blogs
           </Button.Content>
           <Button.Content hidden>
           <Icon name='left arrow' />
           </Button.Content>
           </Button>
          </Link>
  </Container>
)

const mapStateToProps = (store, props) => {
  return { blog: store.blogs.find(a => a.id === parseInt(props.match.params.id)) }
}

export default connect(mapStateToProps)(Blog);