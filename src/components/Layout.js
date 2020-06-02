import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .container{
        padding-top: 120px;
        z-index: -2; 
    }
`;


export const Layout = (props) => (
    <Styles>
        {props.children}
    </Styles>
)