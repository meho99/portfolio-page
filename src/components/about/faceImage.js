// ----------  ostylowany obrazek z twarzą  ----------

import React from 'react'
import styled from 'styled-components'
import faceImage from './assets/face.jpg'

// -----  style  -----
const Face = styled.img`
    width: 6.6vw;
    border: 2px solid #9e9d24;
    border-radius: 12px;
    height: 7.9vw;
    -webkit-box-shadow: 10px 10px 18px -8px rgba(0,0,0,0.54);
    -moz-box-shadow: 10px 10px 18px -8px rgba(0,0,0,0.54);
    box-shadow: 10px 10px 18px -8px rgba(0,0,0,0.54);
    @media (max-width: 768px)
    {
        width: 8vw;
        height: 9vw;
    }
`

// -----  komponent  -----

const FaceImage = () =>
    <Face src={faceImage}/>

export default FaceImage

