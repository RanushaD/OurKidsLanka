import React from 'react';
import { Layout } from './components/Layout';
import {Image} from 'react-bootstrap';
import styled from 'styled-components';
import pageHead2 from '../src/assets/pageHeader2.jpg';

const Styles = styled.div `


`;



export const About = () => (
    <div>
        <Image src={pageHead2} fluid/>
        <Layout>
        <h2> About Page </h2>
        <p> Stare at bkdjkfjkajkdgkdfkgsdkgjk</p>
        <p> Stare at bkdjkfjkajkdgkdfkgsdkgjk</p>
        <p> Stare at bkdjkfjkajkdgkdfkgsdkgjk</p>
        </Layout>
    </div>
    
)