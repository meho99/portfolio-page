// ----------  komponent pojedynczej umiejętności  ----------

import React from 'react'
import styled from 'styled-components'

// -----  style  -----

const Container = styled.div`
    color: #151a21;
    background-color: #f2f2f2;
    margin: 0.5vw 1vw;
    padding: 0.2vw;
    width: 25vw;
    border-radius: 12px;
    -webkit-box-shadow: 10px 10px 18px -8px rgba(0,0,0,0.54);
    -moz-box-shadow: 10px 10px 18px -8px rgba(0,0,0,0.54);
    box-shadow: 10px 10px 18px -8px rgba(0,0,0,0.54);
    &:hover{
        cursor: pointer;
        background-color: #C3C3C3;
    }
`

// -----  komponent  -----

const Skill = (props) =>
    <Container>
        {props.skillName}
    </Container>

export default Skill