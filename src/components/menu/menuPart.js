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
    font-size: 55px
`
// ----- koponent -----

const MenuPart = ({ name, href }) => 
    <Li>
        <Link >{name}</Link>
    </Li>


export default MenuPart;
