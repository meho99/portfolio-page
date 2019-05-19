// ----------  o mnie  ----------

import React, { Component } from 'react';
import styled from 'styled-components'
import Project from './project'

// ----- grafiki -----

import Rpg from './assets/rpg.png'
import Pracownia from './assets/pracownia.png'
import Rysio from './assets/rysio.png'
import Portfolio from './assets/portfolio.png'

// ----- style -----

const Container = styled.div`
    width: 100vw;
    background-color: #3b4048;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
`
const Header = styled.h1`
    color: #9e9d24 ;
    font-size: 3vw;
    margin: 4vw;
`
const ProjectDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content:space-evenly;
`
const StylP = styled.p`
    font-size: 2vw;
    color: #f2f2f2;
    margin-bottom: 4vw;
`

// ----- koponent -----

export default class ProjectsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            // ----- tablica z danymi do projektow -----

            projects:
                [
                    ['RPG Battle Simulator', 'https://rpg-battle-simulator.firebaseapp.com/', 'https://github.com/meho99/rpg-battle-simulator', Rpg],
                    ['Pracownia Krawiecka Gosia', 'https://pracowniagosia.pl', 'https://github.com/meho99/pracowniagosia', Pracownia],
                    ['Richard Whale', 'https://rysio-71d04.firebaseapp.com/', 'https://github.com/meho99/richardWhale', Rysio],
                    ['Strona Portfolio', 'https://michal-topa-front-end.firebaseapp.com', 'https://github.com/meho99/portfolio-page', Portfolio]
                ]
        };
    }
    render() {
        return (
            <Container>
                <Header>MOJE PROJEKTY &lt;&frasl;&gt; </Header>
                <StylP>Oto kilka moich autorskich projektów zrealizowanych w ostatnim czasie :</StylP>
                <ProjectDiv>

                    {
                        this.state.projects.map((i, index) =>
                            <Project name={i[0]} website={i[1]} github={i[2]} image={i[3]} key={index} />
                        )
                    }
                </ProjectDiv>
            </Container>
        )
    }
}

