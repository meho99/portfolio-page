// ----------  o mnie  ----------

import React from 'react';
import styled from 'styled-components'
import MailComponent from './mail'

// ----- grafiki -----

import phoneIcon from './assets/phone.png'
import emailIcon from './assets/email.png'
import personIcon from './assets/person.png'

// ----- style -----

const Container = styled.div`
    width: 100vw;
    background-color: #f2f2f2;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
`
const Header = styled.h1`
    color: #151a21;
    font-size: 3vw;
    margin: 4vw;
`
const HalfPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
    margin-bottom: 4vw;
    border-right: ${props=>props.left? '0.2vw solid #9e9d24':''};
`
const Icons = styled.img`
    width: 2.5vw;
    height: 2.5vw;
    border: 0.3vw solid #9e9d24;
    border-radius: 100px;
    padding: 0.3vw;
    margin: 1vw;
`
const OneLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center
`
const NextIcon = styled.p`
    font-size: 1.5vw;
    color:  #151a21
`

// ----- koponent -----

const ContactContainer = () =>
    <Container>
        <Header>KONTAKT &lt;&frasl;&gt;</Header>
        <OneLine>
            <HalfPageDiv left >
                <OneLine>
                    <Icons src={personIcon} />
                    <NextIcon>Michał Topa</NextIcon>
                </OneLine>
                <OneLine>
                    <Icons src={phoneIcon} />
                    <NextIcon>+48 574 749 143</NextIcon>
                </OneLine>
                <OneLine>
                    <Icons src={emailIcon} />
                    <NextIcon>michal.t1506@gmail.com</NextIcon>
                </OneLine>
            </HalfPageDiv>
            <HalfPageDiv>
                <MailComponent/>
            </HalfPageDiv>
        </OneLine>
    </Container>

export default ContactContainer