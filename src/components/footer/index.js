// ----------  o mnie  ----------

import React from 'react';
import styled from 'styled-components'


// ----- style -----

const Container = styled.div`
    width: 100vw;
    height: 4vw;
    background-color: #151a21;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 0.3vw solid #9e9d24;
    font-size: 1vw;
`
const Link= styled.a`
    color: #c3c3c3;
`

// ----- koponent -----

const Footer = ()=>
    <Container>
        <div>Icons made by <Link href="https://www.freepik.com/" title="Freepik">Freepik</Link> from <Link href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</Link> is licensed by <Link href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</Link></div>
    </Container>

export default Footer