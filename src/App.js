import React from 'react';
import styled from 'styled-components';
import './styles.css';

// Import your components
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Contacts from './components/Contacts';
import Btc from './components/Btc';


// Main styled container
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

function App() {

  return (
    <Container>
      <NavBar /> 
      <Header />
      <About />   
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contacts />
      <Btc/>
      <Footer />
      
    </Container>
  );
}

export default App;

