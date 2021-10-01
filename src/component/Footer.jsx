import { Badge } from '@material-ui/core';
import {Facebook, Twitter, Instagram, YouTube} from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height : 140px;
    background-color: #DCAB92;
     padding : 10px 60px;
`;

const Wrapper = styled.div`
    padding : 10px 10px;
    display : flex;
    justify-content : center;
    align-items: center;

    flex-direction: column;
    max-width: 1000px;
    margin: 0 auto;
`;

const Column = styled.div`
    display:flex;
    flex-direction : column;
    text-align: left;
    margin-left: 60px;
    display: inline-flex;
`

const Left = styled.div`
    flex : 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 20px;
    cursor: pointer;
`;


const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Column>
                    
                    <div className="container row" >
                    <div className="col-md-4 ">
                    <Language style={{color:'black'}}>Company</Language>
                    <p> 
                        About 
                        <br></br>
                        Code of Ethics 
                        <br></br>
                        Carrers
                    </p>
                    </div>

                    <div className="col-md-4 ">
                    <Language style={{color:'black'}}>Help</Language>
                    <p>
                    Contact Us 
                    <br></br>
                    Shiping Services
                        <br></br>
                        Payment Options
                    </p>
                    </div>

                  <div className="col-md-4 ">
                    <Language style={{color:'black'}}>Follow Us</Language> 
                    <Badge color = "primary"> 
                    <Instagram/><Twitter/><Facebook/><YouTube/>
                    </Badge>
                    </div>
                    </div>
                    
                    </Column>
                   
                </Left>
              
            </Wrapper>
            
        </Container>
    )
}

export default Footer