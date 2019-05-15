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
    background-color: #151a21;
    justify-content: space-evenly;
    color: white;
    align-items: center;
    border-bottom: 0.3vw solid #9e9d24;
    position: fixed;
    z-index: 5;
    @media(max-width: 758px){ 
        height: 3.8vw;
    }

`
const Logo= styled.p`
    color: #9e9d24 ;
    width: 30vw;
    font-size: 2vw;
    text-decoration: underline;
    @media(max-width: 758px){ 
        font-size: 3vw;
    }
`
// ----- komponent -----

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hrefs: [
                ['O MNIE', '#about'],
                ['UMIEJĘTNOŚCI', '#skills'],
                ['MOJE PROJEKTY', '#offer'],
                ['KONTAKT', '#contact'],
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
