// -----------  linki  ----------

import React from 'react'
import styled from 'styled-components'
import './animations.css'

// ----- style -----

const Li = styled.div`
    text-decoration: none;
    
`
const Link = styled.a`
    color: ${props => props.actuall ? '#9e9d24' : 'white'};
    cursor: pointer;
    position: relative;
    &:hover{
        color:#9e9d24;
    };
`
// ----- koponent -----

const MenuPart = ({ name, actuall, setActuall }) =>
    <Li className='menu__group'>
        <Link className='menu__link' onClick={() => { setActuall(name) }} actuall={actuall} >{name}</Link>
    </Li>


export default MenuPart;
