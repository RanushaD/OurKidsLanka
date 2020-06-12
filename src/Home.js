import React from 'react';
import styled from 'styled-components';
import icon from './assets/orange.png';
import { Slideshow } from './components/Carousel';
import { FooterPage } from './components/Footer';
import { Layout } from './components/Layout';
import {MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody} from "mdbreact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Image, Row, Button } from 'react-bootstrap';

const Styles = styled.div `

    /* 3 Value Circle Images*/

    .d-flex{
        align-items: center;
    }
    .col{
        position: relative;
        display: flex;
        padding: 1rem;
        flex-direction: column;
        margin: 50px;
    }
    .view {
        display: flex;
        flex-direction: row;
        height: 250px;
        width: 100%;
        align-items: center;
    }
    .icons{
        diplay: block;
        margin-left: auto; 
        margin-right: auto;
        border-radius: 50%;
        max-width: 100%;
        max-height: 100%;
    }

    /* Divider */

    hr {
        height: 1px;
        margin: 50px 0;
        background: -webkit-gradient(linear, 0 0, 100% 0, from(rgba(0, 0, 0, 0)), color-stop(0.5, #333333), to(rgba(0, 0, 0, 0)));
        background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
        background: -moz-linear-gradient(left, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
        background: -o-linear-gradient(left, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
        background: linear-gradient(left, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
        border: 0;
      }
      hr:after {
        display: block;
        content: '';
        height: 30px;
        background-image: -webkit-gradient(radial, 50% 0%, 0, 50% 0%, 116, color-stop(0%, #cccccc), color-stop(100%, rgba(255, 255, 255, 0)));
        background-image: -webkit-radial-gradient(center top, farthest-side, #cccccc 0%, rgba(255, 255, 255, 0) 100%);
        background-image: -moz-radial-gradient(center top, farthest-side, #cccccc 0%, rgba(255, 255, 255, 0) 100%);
        background-image: -o-radial-gradient(center top, farthest-side, #cccccc 0%, rgba(255, 255, 255, 0) 100%);
        background-image: radial-gradient(farthest-side at center top, #cccccc 0%, rgba(255, 255, 255, 0) 100%);
      }
    
    /* Header */  

    .home-header{
        text-align: center;
        font-weight: bold;
        line-height: 1.2;
        font-size: 2rem;
    }

    .sumUp {
        margin-top: 3rem;
        margin-bottom: 3rem;
        text-align: center;
        color: #6c757d;

    }

    /* Card Deck */

    .col-cascade{
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
        position: relative;
        width:100%;
        padding-right:15px;
        padding-left: 15px;
        overflow-x: hidden;
    }

    .card{
        font-weight: 400;
        border: 0;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
        overflow-x:hidden;
    }

    .grey{
        background-color: #9e9e9e;
        overflow-x: hidden;
    }
    .grey.lighten-4{
        background-color: #f5f5f5;
        overflow-x:hidden;
    }
    .img-fluid{
        max-width: 100%;
        height: auto;
        overflow-x:hidden;
    }
    .cardfadeIn.aos-init{
        overflow-x: hidden;
    }

    [data-aos^=fade][data-aos^=fade] {
        opacity: 0;
        transition-property: opacity,transform;
        overflow-x: hidden;
        &.aos-animate{
            opacity: 1;
            transform: translateZ(0);
        }

    }
    [data-aos=fade-right]{
        transform:translate3d(-100px,0,0);
    }

    [data-aos=fade-left]{
        transform:translate3d(100px,0,0);
    }

    /* Banner */

    .row{
        background-color:red;
        overflow:hidden;
        padding:0px 0px;
        margin: 50px auto;
    }
    .inner{
        align-items: center;
        vertical-align: top;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .twoThirds{
        display: inline-block;
        width: 66.66%;
        text-align: center;
    }

    .oneThird{
        vertical-align: top;
        display: inline-block;
        width: 33.33%;
        align-items: center;
    }

    .donate-btn{
        margin-top: 40px;

    }

    .donate-image{
        width: 50%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: 20%;
    }
    .text{
        padding-left: 20px;
        padding-right: 20px;
    }

    @media screen and (max-width: 1000px) {
        .view{
            align-items: center;
            height: 200px;
            transition: 0.4s;
        }
    }
    @media screen and (max-width: 800px){
        .col{
            flex-basis: auto;
        }
        .col-cascade{
            flex-basis: auto;
            max-width: 100%;
        }
        .twoThirds{
            width: auto;
        }
        .oneThird{
            width: auto;
            padding: 3rem;
        }
    }

`;
export const Home = () => (
    <div>
        <Slideshow/>
        <Styles>
            <div class="d-flex flex-wrap">
                <MDBCol class="col">
                    <MDBView class="view">
                        <img class= "icons" src={icon} alt="Icon1"></img>
                    </MDBView>
                </MDBCol>
                <MDBCol class="col">
                    <MDBView class="view">
                        <img class="icons" src={icon} alt="Icon2"></img>
                    </MDBView>
                </MDBCol>
                <MDBCol class="col">
                    <MDBView class="view">
                        <img class="icons" src={icon} alt="Icon3"></img>
                    </MDBView>
                </MDBCol>
            </div>

            <div class="card-body">
                    <hr></hr>
            </div>

            <div class="container-fluid" scrolling="auto" allowtransparency="true" allowfullscreen="true">
                <div class="header">
                    <h2 class ="home-header">Why is it so great?</h2>
                    <h3 class = "sumUp"> Google has designed a Material Design to make the web more beautiful and more user-friendly. Twitter has created a Bootstrap to support you in faster and easier development of responsive and effective websites. We present you a framswork containing the best features of both of them - Material Design for Bootstrap.</h3>
                </div>
                   <div class = "d-flex flex-wrap" translate="no" data-aos-easing="ease" data-aos-duration="7000" data-aos-delay="0">
                        <div class="col-cascade">
                            <div class="cardfadeIn" data-aos="fade-right" data-aos-duration="7000">
                                <div class="card-cascade card my-3 grey lighten-4">
                                    <div class="card-img-top">
                                        <img src="https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg" class="img-fluid"></img>
                                    </div>
                                    <div class="card-body card-body-cascade">
                                        <h4 class="card-title"><strong>Blah Blah Blah</strong></h4>
                                        <p class="card-text"> Animations, colours, shadows, skins and many more! Get to know all our css styles in one place </p>
                                        <a class="nav-link btn btn-outline-mdb-color btn-sm btn-rounded d-inline">View</a>
                                    </div>

                                </div>                                    
                            </div>     
                        </div>
                        <div class="col-cascade">
                            <div class="cardfadeIn" data-aos="fade-down" data-aos-duration="7000">
                                <div class="card-cascade card my-3 grey lighten-4">
                                    <div class="card-img-top">
                                        <img src="https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg" class="img-fluid"></img>
                                    </div>
                                    <div class="card-body card-body-cascade">
                                        <h4 class="card-title"><strong>Blah Blah Blah</strong></h4>
                                        <p class="card-text"> Animations, colours, shadows, skins and many more! Get to know all our css styles in one place </p>
                                        <a class="nav-link btn btn-outline-mdb-color btn-sm btn-rounded d-inline">View</a>
                                    </div>

                                </div>                                    
                            </div>     
                        </div>
                        <div class="col-cascade">
                            <div class="cardfadeIn" data-aos="fade-left" data-aos-duration="7000">
                                <div class="card-cascade card my-3 grey lighten-4">
                                    <div class="card-img-top">
                                        <img src="https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg" class="img-fluid"></img>
                                    </div>
                                    <div class="card-body card-body-cascade">
                                        <h4 class="card-title"><strong>Blah Blah Blah</strong></h4>
                                        <p class="card-text"> Animations, colours, shadows, skins and many more! Get to know all our css styles in one place </p>
                                        <a class="nav-link btn btn-outline-mdb-color btn-sm btn-rounded d-inline">View</a>
                                    </div>

                                </div>                                    
                            </div>     
                        </div>
                   </div>

                    <div class="banner" data-aos="zoom-in" data-aos-duration="1200">
                    <Row>
                            <div class= "inner">  
                                <div class ="twoThirds">
                                    <div class="text">
                                        <h3> Make a donation to support the many kids that need your help. Your Donation will give them a fraction of the opportunities you and I have everyday!</h3>
                                    </div>
                                    <div class="donate-btn">
                                        <Button variant="success" size="lg">DONATE</Button>
                                    </div>
                                </div>
                                <div class="oneThird">
                                    <div class="donate-image">
                                        <Image src={icon} roundedCircle fluid/>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>



                   <div class = "d-flex flex-wrap" translate="no" data-aos-easing="ease" data-aos-duration="7000" data-aos-delay="0">
                     <div class="col-cascade">
                            <div class="cardfadeIn" data-aos="fade-right" data-aos-duration="7000">
                                <div class="card-cascade card my-3 grey lighten-4">
                                    <div class="card-img-top">
                                        <img src="https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg" class="img-fluid"></img>
                                    </div>
                                    <div class="card-body card-body-cascade">
                                        <h4 class="card-title"><strong>Blah Blah Blah</strong></h4>
                                        <p class="card-text"> Animations, colours, shadows, skins and many more! Get to know all our css styles in one place </p>
                                        <a class="nav-link btn btn-outline-mdb-color btn-sm btn-rounded d-inline">View</a>
                                    </div>

                                </div>                                    
                            </div>     
                        </div>
                        <div class="col-cascade">
                            <div class="cardfadeIn" data-aos="fade-down" data-aos-duration="7000">
                                <div class="card-cascade card my-3 grey lighten-4">
                                    <div class="card-img-top">
                                        <img src="https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg" class="img-fluid"></img>
                                    </div>
                                    <div class="card-body card-body-cascade">
                                        <h4 class="card-title"><strong>Blah Blah Blah</strong></h4>
                                        <p class="card-text"> Animations, colours, shadows, skins and many more! Get to know all our css styles in one place </p>
                                        <a class="nav-link btn btn-outline-mdb-color btn-sm btn-rounded d-inline">View</a>
                                    </div>

                                </div>                                    
                            </div>     
                        </div>
                        <div class="col-cascade">
                            <div class="cardfadeIn" data-aos="fade-left" data-aos-duration="7000">
                                <div class="card-cascade card my-3 grey lighten-4">
                                    <div class="card-img-top">
                                        <img src="https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg" class="img-fluid"></img>
                                    </div>
                                    <div class="card-body card-body-cascade">
                                        <h4 class="card-title"><strong>Blah Blah Blah</strong></h4>
                                        <p class="card-text"> Animations, colours, shadows, skins and many more! Get to know all our css styles in one place </p>
                                        <a class="nav-link btn btn-outline-mdb-color btn-sm btn-rounded d-inline" href="/meetus">View</a>
                                    </div>
                                </div>                                    
                            </div>     
                        </div>
                   </div>
            </div>
        </Styles>
        <FooterPage/>
    </div>
)
AOS.init();