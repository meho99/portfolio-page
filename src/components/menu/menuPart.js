// -----------  linki  ----------

import React from 'react'
import styled from 'styled-components'

// ----- style -----

const Li = styled.div`
    text-decoration: none;
    
`
const Link = styled.a`
    text-decoration: none,
    color: white,
    font-size: 55px;
    border: ${props=> props.actuall ? '2px solid white':''};
    cursor: pointer;
`
// ----- koponent -----

const MenuPart = ({ name, actuall, setActuall }) => 
    <Li>
        <Link onClick={()=>{setActuall(name)}} actuall={actuall} >{name}</Link>
    </Li>


export default MenuPart;
