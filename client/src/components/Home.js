import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, Container, } from 'semantic-ui-react';

const Home = () => (
    <Container>

    <Header as='h1'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Charm", cursive'
      }}> Welcome To {''}
      <Link to="/blogs"> My Blogs</Link>
    </Header>
        <hr />
        <div style={{fontFamily: '"Charm", cursive'}}>
          About Me:
          </div>
        <br />
        <p style={{
          fontFamily: 'Charm',
        }}>
        Malls are great places to shop; I can find everything I need under one roof.
We have never been to Asia, nor have we visited Africa.
Abstraction is often one floor above you.
He didn’t want to go to the dentist, yet he went anyway.
He turned in the research paper on Friday; otherwise, he would have not passed the class.
Check back tomorrow; I will see if the book has arrived.
The clock within this blog and the clock on my laptop are 1 hour different from each other.
She works two jobs to make ends meet; at least, that was her reason for not having time to join us.
The mysterious diary records the voice.
I'd rather be a bird than a fish.
        </p>
        </Container>
)

export default Home;
