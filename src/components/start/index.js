// ----------  start  ----------

import React from 'react'
import styled from 'styled-components'
import backgroundImage from './assets/background.jpg'

// -----  style  -----

const Container = styled.div`
    width: 100vw;
    background-color: #f2f2f2;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    z-index: 0;
`
const Background = styled.img`
    width: 100vw;
    margin-bottom: 0.2vw;
    opacity: 0.9;
    border-bottom: 0.5vw solid #9e9d24;
    border-bottom-left-radius: 4vw;
    border-bottom-right-radius: 4vw;
`
const Logo= styled.p`
    color: #9e9d24 ;
    -webkit-box-shadow: 10px 10px 18px -8px rgba(0,0,0,0.54);
    -moz-box-shadow: 10px 10px 18px -8px rgba(0,0,0,0.54);
    box-shadow: 10px 10px 18px -8px rgba(0,0,0,0.54);
    font-size: 5vw;
    position: absolute;
    left: 39vw;
    bottom: 8vw;
    font-weight: bold;
    z-index: 10;
`

// -----  komponent  -----

const StartComponent = ()=>
    <Container>
        <Logo>Michał Topa</Logo>
        <Background src={backgroundImage} alt='backgorund '/>
    </Container>

export default StartComponent;