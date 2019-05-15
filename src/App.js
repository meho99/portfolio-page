import React from 'react';
import styled from 'styled-components'

import StartComonent from './components/start'
import Menu from './components/menu'
import AboutContainer from './components/about'
import SkillsContainer from './components/skills'
import ProjectsContainer from './components/projects'
import ContactContainer from './components/contact'
import Footer from './components/footer'

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center

`

const App = () => {
  return (
    <Container className="App">
      <Menu />
      <StartComonent />
      <AboutContainer />
      <SkillsContainer />
      <ProjectsContainer />
      <ContactContainer />
      <Footer />
    </Container>
  );
}

export default App;
