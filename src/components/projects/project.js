// ----------  pojedynczy projekt  ----------

import React, { Component } from 'react'
import styled from 'styled-components'

// ----- ikonki -----

import gitHubIcon from './assets/icons/GitHub-Mark-64px.png'
import wwwIcon from './assets/icons/www.png'

// -----  style  -----
const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 4vw;
    position: relative
`
const Name = styled.p`
    font-size: 3vw;
    color: black;
    opacity: 1;
    margin-top: 3vw;
`
const Picture = styled.img`
    width: 40vw;
    border: 0.3vw solid #9e9d24;
    border-radius: 12px;
    height: 20vw;
    -webkit-box-shadow: 10px 10px 18px -8px rgba(0,0,0,0.54);
    -moz-box-shadow: 10px 10px 18px -8px rgba(0,0,0,0.54);
    box-shadow: 10px 10px 18px -8px rgba(0,0,0,0.54);
    z-index: 2;
    box-sizing: border-box;
`
const HiddenDiv = styled.div`
    z-index: ${props => props.mouseIn ? 3 : 1};
    position: absolute;
    width: 40vw;
    border-radius: 12px;
    border: 0.3vw solid #9e9d24;
    background-color: gray;
    opacity: 0.9;
    height: 20vw;
    top: 0
`
const Icon = styled.img`
    opacity: 1;
    margin: 1vw;
    width: 4vw;
    cursor: pointer;
`

// -----  komponent  -----

export default class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mouseIn: false
        };
    }

    // ----- zmiana wyglądu po najechaniu myszką -----

    mouseChange = (e) => {

        this.setState({ mouseIn: !this.state.mouseIn })
    }

    render() {
        return (
            <Container>
                <Picture onMouseEnter={this.mouseChange} src={this.props.image} alt={this.props.name} />
                <HiddenDiv mouseIn={this.state.mouseIn} onMouseLeave={this.mouseChange}>
                    <Name>{this.props.name}</Name>
                    <a href={this.props.github} target='_blank'><Icon alt='giticon' src={gitHubIcon} /></a>
                    <a href={this.props.website} target='_blank'><Icon alt='www' src={wwwIcon} /></a>
                </HiddenDiv>

            </Container>
        )
    }
}