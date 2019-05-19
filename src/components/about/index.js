// ----------  o mnie  ----------

import React from 'react';
import styled from 'styled-components'
import FaceImage from './faceImage'

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
    color: #9e9d24 ;
    font-size: 3vw;
    margin: 4vw;
`
const BottomDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 6vw;
`
const LeftDiv = styled.div`
    width: 45vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const UnderFace = styled.div`
    font-size : ${props=> props.big ? "1.5vw"   : "1.3vw"};
    text-align: center;
    margin-top: 0.15vw;
    border-bottom: 2px solid #9e9d24
`
const RightDiv = styled.div`
    width: 45vw;
    border-left: 0.2vw solid #9e9d24
`

// ----- koponent -----

const AboutContainer = (props) =>
    <Container ref={props.Ref}>
        <Header>
            O MNIE &lt;&frasl;&gt;
            </Header>
        <BottomDiv>
            <LeftDiv>
                <FaceImage />
                <UnderFace big >Michał Topa</UnderFace>
                <UnderFace  >Front-End Developer</UnderFace>
            </LeftDiv>
            <RightDiv>
                Nazwyam się MichaŁ Topa i jestem absolwentem <br /> Technikum Łączności w Krakowie na kierunku informatyka.<br />
                Swoje umiejętności w programowaniu webowym poszerzam od 3 lat. <br />
                Tworzenie nowych projektów oraz nauka nowych technologii to dla mnie czysta przyjemność.<br />
                Oprócz programowania zajmuję się również grą na instrumentach.
                </RightDiv>
        </BottomDiv>
    </Container>

export default AboutContainer