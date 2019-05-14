// ----------  o mnie  ----------

import React from 'react';
import styled from 'styled-components'
import faceImage from './assets/face.jpg'


// ----- style -----

const Container = styled.div`
    width: 100vw;
    margin-top: 3vw;
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
const Face = styled.img`
    width: 6.6vw;
    border: 2px solid #9e9d24;
    border-radius: 12px;
    height: 7.9vw;
    -webkit-box-shadow: 10px 10px 18px -8px rgba(0,0,0,0.54);
    -moz-box-shadow: 10px 10px 18px -8px rgba(0,0,0,0.54);
    box-shadow: 10px 10px 18px -8px rgba(0,0,0,0.54);
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
    border-left: 4px solid #9e9d24
`

// ----- koponent -----

const AboutContainer = () =>
    <Container>
        <Header>
            O MNIE &lt;&frasl;&gt;
            </Header>
        <BottomDiv>
            <LeftDiv>
                <Face src={faceImage} alt='faceImage' />
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