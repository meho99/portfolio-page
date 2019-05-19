// ----------  o mnie  ----------

import React, { Component } from 'react';
import styled from 'styled-components'
import Skill from './skill'

// ----- style -----


const Container = styled.div`
    width: 100vw;
    background-color:#d2ce56;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
`
const Header = styled.h1`
    color: #151a21;
    font-size: 3vw;
    margin-top: 4vw;
`
const SmallHeader = styled.h1`
    color: #151a21;
    font-size: 2.5vw;
    margin-bottom: 2vw;
`
const Table = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 55vw;
    justify-content: center;
    margin-bottom: 4vw;
`

// ----- koponent -----

export default class SkillsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: ['- HTML5 -', '- CSS3 -', '- JavaScript -', '- React + React Native -', '- RWD -', '- Język angielski B2  -', '- praca z systemami Linux -'],
            learned: ['- GIT -', '- Redux -', '- SASS - ']
        };
    }
    render() {
        return (
            <Container>
                <Header>UMIEJĘTNOŚCI &lt;&frasl;&gt; </Header>
                <SmallHeader>Umiem :</SmallHeader>
                <Table>
                    {
                        this.state.skills.map((i, index) =>
                            <Skill skillName={i} key={index} />
                        )
                    }
                </Table>
                <SmallHeader>Znam podstawy :</SmallHeader>
                <Table>
                    {
                        this.state.learned.map((i, index) =>
                            <Skill skillName={i} key={index} />
                        )
                    }
                </Table>
            </Container>
        );
    }
}


