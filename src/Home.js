import React from 'react';
import styled from 'styled-components';
import icons from './assets/orange.png';
import { Slideshow } from './components/Carousel';
import { Layout } from './components/Layout';
import {MDBMask, MDBView, MDBContainer, MDBRow, MDBCol} from "mdbreact";


const Styles = styled.div `
    .col{
        position: relative;
        display: flex;
        padding: 1rem;
        flex-direction: row;
        margin: 50px;
        align-items: center;
    }
    .view {
        display: flex;
        flex-direction: row;
        height: 250px;
        width: 100%;
        align-items: center;
    }
    img{
        diplay: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50%;
        max-width: 100%;
        max-height: 100%;
    }

    .home-header{
        text-align: center;
    }


    @media screen and (max-width: 1000px) {
        .view{
            align-items: center;
            height: 200px;
            transition: 0.4s;
        }
    }
    @media screen and (max-width: 700px){
        .col{
            flex-basis: auto;

        }
    }

`;
export const Home = () => (
    <div>
        <Slideshow/>
        <Styles>
            <div class="d-flex justify-content-center">
                <MDBCol className="col">
                    <MDBView className="view">
                        <img src={icons} alt="Icon1"></img>
                    </MDBView>
                </MDBCol>
                <MDBCol className="col">
                    <MDBView className="view">
                        <img src={icons} alt="Icon2"></img>
                    </MDBView>
                </MDBCol>
                <MDBCol className="col">
                    <MDBView className="view">
                        <img src={icons} alt="Icon3"></img>
                    </MDBView>
                </MDBCol>
            </div>
            <div class="animated fadeInUp">
                <h2 className ="home-header">Home Page</h2>
            </div>
            <p className = "home-text"> Stare at bkdjkfjkajkdgkdfkgsdkgjk dkfjgd dkfjgdjg dfkgjdkgjd fgkdjfkg dkjgd kfjgkdjfg dkjfg kdjfg kdjg dkfjg dkjfg dkjfgk djfgk dfjgk dfjg kdfjg kdfjg kdjf gkdj fkgjd fgjd fjgkd fgkdf gkjdfk gjsgkhgi rhkgjsdk fj skjdfhk jhk ejh fkjsfkesjjjefkhe riugd fjgkd fkjghd kjfhgk dfg kjdhf khjs kgjhskjfhs kdfhdfhgkdgdgdg.df .dfg d.fg.d fg.df.g d.fgdfgdfgdmgndkjfghkdhgdkjgd</p>
            <p className = "home-text"> Stare at bkdjkfjkajkdgkdfkgsdkgjk dkfjgd dkfjgdjg dfkgjdkgjd fgkdjfkg dkjgd kfjgkdjfg dkjfg kdjfg kdjg dkfjg dkjfg dkjfgk djfgk dfjgk dfjg kdfjg kdfjg kdjf gkdj fkgjd fgjd fjgkd fgkdf gkjdfk gjsgkhgi rhkgjsdk fj skjdfhk jhk ejh fkjsfkesjjjefkhe riugd fjgkd fkjghd kjfhgk dfg kjdhf khjs kgjhskjfhs kdfhdfhgkdgdgdg.df .dfg d.fg.d fg.df.g d.fgdfgdfgdmgndkjfghkdhgdkjgd</p>
            <p className = "home-text"> Stare at bkdjkfjkajkdgkdfkgsdkgjk dkfjgd dkfjgdjg dfkgjdkgjd fgkdjfkg dkjgd kfjgkdjfg dkjfg kdjfg kdjg dkfjg dkjfg dkjfgk djfgk dfjgk dfjg kdfjg kdfjg kdjf gkdj fkgjd fgjd fjgkd fgkdf gkjdfk gjsgkhgi rhkgjsdk fj skjdfhk jhk ejh fkjsfkesjjjefkhe riugd fjgkd fkjghd kjfhgk dfg kjdhf khjs kgjhskjfhs kdfhdfhgkdgdgdg.df .dfg d.fg.d fg.df.g d.fgdfgdfgdmgndkjfghkdhgdkjgd</p>
            <p className = "home-text"> Stare at bkdjkfjkajkdgkdfkgsdkgjk dkfjgd dkfjgdjg dfkgjdkgjd fgkdjfkg dkjgd kfjgkdjfg dkjfg kdjfg kdjg dkfjg dkjfg dkjfgk djfgk dfjgk dfjg kdfjg kdfjg kdjf gkdj fkgjd fgjd fjgkd fgkdf gkjdfk gjsgkhgi rhkgjsdk fj skjdfhk jhk ejh fkjsfkesjjjefkhe riugd fjgkd fkjghd kjfhgk dfg kjdhf khjs kgjhskjfhs kdfhdfhgkdgdgdg.df .dfg d.fg.d fg.df.g d.fgdfgdfgdmgndkjfghkdhgdkjgd</p>
            <p className = "home-text"> Stare at bkdjkfjkajkdgkdfkgsdkgjk dkfjgd dkfjgdjg dfkgjdkgjd fgkdjfkg dkjgd kfjgkdjfg dkjfg kdjfg kdjg dkfjg dkjfg dkjfgk djfgk dfjgk dfjg kdfjg kdfjg kdjf gkdj fkgjd fgjd fjgkd fgkdf gkjdfk gjsgkhgi rhkgjsdk fj skjdfhk jhk ejh fkjsfkesjjjefkhe riugd fjgkd fkjghd kjfhgk dfg kjdhf khjs kgjhskjfhs kdfhdfhgkdgdgdg.df .dfg d.fg.d fg.df.g d.fgdfgdfgdmgndkjfghkdhgdkjgd</p>
            <p className = "home-text"> Stare at bkdjkfjkajkdgkdfkgsdkgjk dkfjgd dkfjgdjg dfkgjdkgjd fgkdjfkg dkjgd kfjgkdjfg dkjfg kdjfg kdjg dkfjg dkjfg dkjfgk djfgk dfjgk dfjg kdfjg kdfjg kdjf gkdj fkgjd fgjd fjgkd fgkdf gkjdfk gjsgkhgi rhkgjsdk fj skjdfhk jhk ejh fkjsfkesjjjefkhe riugd fjgkd fkjghd kjfhgk dfg kjdhf khjs kgjhskjfhs kdfhdfhgkdgdgdg.df .dfg d.fg.d fg.df.g d.fgdfgdfgdmgndkjfghkdhgdkjgd</p>
            <p className = "home-text"> Stare at bkdjkfjkajkdgkdfkgsdkgjk dkfjgd dkfjgdjg dfkgjdkgjd fgkdjfkg dkjgd kfjgkdjfg dkjfg kdjfg kdjg dkfjg dkjfg dkjfgk djfgk dfjgk dfjg kdfjg kdfjg kdjf gkdj fkgjd fgjd fjgkd fgkdf gkjdfk gjsgkhgi rhkgjsdk fj skjdfhk jhk ejh fkjsfkesjjjefkhe riugd fjgkd fkjghd kjfhgk dfg kjdhf khjs kgjhskjfhs kdfhdfhgkdgdgdg.df .dfg d.fg.d fg.df.g d.fgdfgdfgdmgndkjfghkdhgdkjgd</p>
            <p className = "home-text"> Stare at bkdjkfjkajkdgkdfkgsdkgjk dkfjgd dkfjgdjg dfkgjdkgjd fgkdjfkg dkjgd kfjgkdjfg dkjfg kdjfg kdjg dkfjg dkjfg dkjfgk djfgk dfjgk dfjg kdfjg kdfjg kdjf gkdj fkgjd fgjd fjgkd fgkdf gkjdfk gjsgkhgi rhkgjsdk fj skjdfhk jhk ejh fkjsfkesjjjefkhe riugd fjgkd fkjghd kjfhgk dfg kjdhf khjs kgjhskjfhs kdfhdfhgkdgdgdg.df .dfg d.fg.d fg.df.g d.fgdfgdfgdmgndkjfghkdhgdkjgd</p>
            <p className = "home-text"> Stare at bkdjkfjkajkdgkdfkgsdkgjk dkfjgd dkfjgdjg dfkgjdkgjd fgkdjfkg dkjgd kfjgkdjfg dkjfg kdjfg kdjg dkfjg dkjfg dkjfgk djfgk dfjgk dfjg kdfjg kdfjg kdjf gkdj fkgjd fgjd fjgkd fgkdf gkjdfk gjsgkhgi rhkgjsdk fj skjdfhk jhk ejh fkjsfkesjjjefkhe riugd fjgkd fkjghd kjfhgk dfg kjdhf khjs kgjhskjfhs kdfhdfhgkdgdgdg.df .dfg d.fg.d fg.df.g d.fgdfgdfgdmgndkjfghkdhgdkjgd</p>
            <p className = "home-text"> Stare at bkdjkfjkajkdgkdfkgsdkgjk dkfjgd dkfjgdjg dfkgjdkgjd fgkdjfkg dkjgd kfjgkdjfg dkjfg kdjfg kdjg dkfjg dkjfg dkjfgk djfgk dfjgk dfjg kdfjg kdfjg kdjf gkdj fkgjd fgjd fjgkd fgkdf gkjdfk gjsgkhgi rhkgjsdk fj skjdfhk jhk ejh fkjsfkesjjjefkhe riugd fjgkd fkjghd kjfhgk dfg kjdhf khjs kgjhskjfhs kdfhdfhgkdgdgdg.df .dfg d.fg.d fg.df.g d.fgdfgdfgdmgndkjfghkdhgdkjgd</p>
            <p className = "home-text"> Stare at bkdjkfjkajkdgkdfkgsdkgjk dkfjgd dkfjgdjg dfkgjdkgjd fgkdjfkg dkjgd kfjgkdjfg dkjfg kdjfg kdjg dkfjg dkjfg dkjfgk djfgk dfjgk dfjg kdfjg kdfjg kdjf gkdj fkgjd fgjd fjgkd fgkdf gkjdfk gjsgkhgi rhkgjsdk fj skjdfhk jhk ejh fkjsfkesjjjefkhe riugd fjgkd fkjghd kjfhgk dfg kjdhf khjs kgjhskjfhs kdfhdfhgkdgdgdg.df .dfg d.fg.d fg.df.g d.fgdfgdfgdmgndkjfghkdhgdkjgd</p>
            <p className = "home-text"> Stare at bkdjkfjkajkdgkdfkgsdkgjk dkfjgd dkfjgdjg dfkgjdkgjd fgkdjfkg dkjgd kfjgkdjfg dkjfg kdjfg kdjg dkfjg dkjfg dkjfgk djfgk dfjgk dfjg kdfjg kdfjg kdjf gkdj fkgjd fgjd fjgkd fgkdf gkjdfk gjsgkhgi rhkgjsdk fj skjdfhk jhk ejh fkjsfkesjjjefkhe riugd fjgkd fkjghd kjfhgk dfg kjdhf khjs kgjhskjfhs kdfhdfhgkdgdgdg.df .dfg d.fg.d fg.df.g d.fgdfgdfgdmgndkjfghkdhgdkjgd</p>
        </Styles>
    </div>
)