import React from 'react';
import {Carousel} from 'react-bootstrap';
import styled from 'styled-components';
import pageHead from '../assets/pageHeader.jpg';


const Styles = styled.div`
    .slidepics{
        background-size: cover;
        padding-top: 70px;
        position: relative;
        max-width:100%;
        z-index: 2;
    }
    .carousel .carousel-caption{
        position: absolute;
        padding: 1rem
        padding-bottom: 20%;
        color: white;
    }

    .captionHead{
        font-size: 5vw;
    }

    .caption{
        font-size: 3vw;
    }


`;

export const Slideshow = () => (
    <Styles>
        <Carousel prevIcon nextIcon aria-hidden="false">
            <Carousel.Item>
                <img className='slidepics' src={pageHead} />
                <Carousel.Caption>
                    <h3 className= 'captionHead'>First slide label</h3>
                    <p className='caption'>blahgjh hjghg hj ghjgjg hg jg hjgjg jg jghjg jhgj.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='slidepics' src={pageHead} />
                <Carousel.Caption>
                    <h3 className= 'captionHead'>Second slide label</h3>
                    <p className='caption'>blahgjh hjghg hj ghjgjg hg jg hjgjg jg jghjg jhgj.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='slidepics' src={pageHead} />
                <Carousel.Caption>
                    <h3 className= 'captionHead'>Third slide label</h3>
                    <p className='caption'>blahgjh hjghg hj ghjgjg hg jg hjgjg jg jghjg jhgj.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Styles>
)