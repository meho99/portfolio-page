// ----------  Formularz mailowy  ----------

import React, { Component } from 'react';
import styled from 'styled-components'

// ----- style -----

const Link= styled.a`
    color: #f2f2f2;
    text-decoration: none;
    border: 0.2vw solid #9e9d24;
    border-radius: 0.5vw;
    padding: 0.3vw;
    font-size: 1.9vw;
    font-weight: bold;
    background-color: #9e9d24;
    &:hover{
        cursor: pointer;
        color: black;
    }
    
`

// ----- komponent -----

export default class MailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: 'michal.t1506',
        domain: 'gmail.com',
    };
  }

  render() {
    return (
        <div>
            <Link href={'mailto:'+this.state.user+'@'+this.state.domain}>NAPISZ DO MNIE</Link>
        </div>
    );
  }
}

