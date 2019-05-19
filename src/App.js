import React, { Component } from 'react';
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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actuallDiv: '', // aktualnie oglądana część strony
      names: [], // nazwy wszystkich divów istotnych przy nawigacji
    }

    // ----- refy do ulatwienia nawigacji -----

    this.Refs = [
      {
        Ref: React.createRef(),
        name: 'O MNIE'
      },
      {
        Ref: React.createRef(),
        name: 'UMIEJĘTNOŚCI'
      },
      {
        Ref: React.createRef(),
        name: 'MOJE PROJEKTY'
      },
      {
        Ref: React.createRef(),
        name: 'KONTAKT'
      }
    ]

  }

  componentDidMount = () => {

    // ----- nazwy divów do nawigacji -----

    let names = this.Refs.map(elem => elem.name)
    this.setState({ names: names })

    window.addEventListener('scroll', this.scroll) // nadanie listenera na scrollowanie

  }

  // ----- nadanie aktualnie oglądanego diva -----

  setActuall = (name) => {

    this.setState({ actuallDiv: name })

  }

  // ----- przeniesienie do wybranego elementu na stronie -----

  scrollTo = async (name) => {

    await this.setActuall(name)

    this.Refs.forEach(async element => {
      if (element.name === this.state.actuallDiv) {
        this.setState({ wait: true })
        element.Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setTimeout(()=>{
          this.setState({ wait: false })
        },900)
        
      }
    })

  }

  // ----- zmienianie aktualnie oglądanego diva przy scrollowaniu -----

  scroll = () => {
    if (!this.state.wait) {
      let currentPosition = window.scrollY;

      this.Refs.forEach(elem => {

        let elemHeight = String(getComputedStyle(this.Refs[1].Ref.current).height)
        var elemHeightNumber = Number(elemHeight.slice(0, elemHeight.length - 2))

        if (currentPosition > elem.Ref.current.offsetTop && currentPosition < elem.Ref.current.offsetTop + elemHeightNumber + 5) {
          this.setActuall(elem.name)
        }
      })
    }

  }

  render() {
    return (
      <Container className="App">
        <Menu actuall={this.state.actuallDiv} setActuall={this.scrollTo} names={this.state.names} />
        <StartComonent />
        <AboutContainer Ref={this.Refs[0].Ref} />
        <SkillsContainer Ref={this.Refs[1].Ref} />
        <ProjectsContainer Ref={this.Refs[2].Ref} />
        <ContactContainer Ref={this.Refs[3].Ref} />
        <Footer />
      </Container>
    );
  }

}


