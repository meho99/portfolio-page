// ----------  o mnie  ----------

import React from 'react';
import styled from 'styled-components'


// ----- style -----

const Container = styled.div`
    {
        width: 100vw;
        height: 3vw;
        background-color: #151a21;
        color: white;
        align-items: center;
        border-top: 0.3vw solid #9e9d24;

    }
`

// ----- koponent -----

const Footer = ()=>
    <Container>
        <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </Container>

export default Footer