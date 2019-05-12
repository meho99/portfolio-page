// ----------  Menu  ----------

import React, { Component } from 'react';
import MenuPart from './menuPart'
import styled from 'styled-components'

// ----- style -----

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 3vw;
    background-color: #263238;
    border-bottom: 2px solid white;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 0.3vw solid #9e9d24;

`
const Logo= styled.p`
    color: #9e9d24 ;
    width: 30vw;
    font-size: 2vw;
    text-decoration: underline;
`
// ----- komponent -----

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hrefs: [
                ['O MNIE', '#about'],
                ['MOJE PROJEKTY', '#offer'],
                ['KONTAKT', '#contact']
            ]
        };
    }
    render() {
        return (
            <Container>
                <Logo>Michał Topa</Logo>
                {
                    this.state.hrefs.map((item, index) => <MenuPart name={item[0]} href={item[1]} key={index} />) // -- generowanie listy załączników z state --
                }
            </Container>
        );
    }
}
