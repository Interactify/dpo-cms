import React, { Component } from 'react'
import styled from 'styled-components'

const Foot = styled.div`
    position: relative;
    .foot-container {
        padding: 120px 0px 60px 0px;
        background-color: #ffffff;
        text-align: center;
        .social {
            padding-top: 40px;
            img {
                width: 30px;
                margin: 10px;
            }
        }
        .contact-text {
            color: #000000;
            font-size: 13px;
            font-weight: 400;
            font-family: 'Muli', sans-serif;
            padding-left: 120px;
            display: inline-block;
            position: relative;
            img {
                position: absolute;
                top: 50%;
                left: 0px;
                transform: translateY(-50%);
            }
        }
    }
    &:before {
        background: url(/images/bow.svg) no-repeat bottom center;
        background-size: cover;
        content: '';
        height: 104px;
        left: 0px;
        position: absolute;
        right: -104px;
        width: 100%;
        top: -103px;
    } 
`

class Footer extends Component {
    render() {
        return (
            <Foot>
                <div className="foot-container">
                    <div className="contact-text">
                        <img src="images/logo4-dashed-black.svg" style={{width: 80, height: 80}} alt="logo" />
                        mail@dposounddesign.com <br />
                        +45 40 98 74 40<br />
                        Valdemarsgade 19B <br />
                        1665 Copenhagen V, Denmark<br />
                        VAT: DK38274716
                    </div>
                    <div className="social">
                        <a href="#"><img src="images/facebook.svg" alt="facebook"/></a>
                        <a href="#"><img src="images/linkedin.svg" alt="facebook"/></a>
                        <a href="#"><img src="images/vimeo.svg" alt="facebook"/></a>
                    </div>
                </div>
            </Foot>
        );
    }
}

export default Footer;
