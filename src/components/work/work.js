import React, { Component } from 'react'
import styled from 'styled-components'
import {media} from 'functions/media-query'

const W = styled.div`
    padding-top: 10px;
    transition: opacity ease-in-out 2s;
    opacity: ${props => props.showWork === true ? 1 : 0};
    text-align: center;
    position: relative;
    ${media.phone`
        overflow: hidden;
    `}
    .poster {
        height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center;
        .header {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            display: block;
            z-index: 2;
            ${media.phone`
                width: 80%;
            `}
            .text-content {
                h2 {
                    opacity: ${props => props.showWork === true ? 1 : 0};
                    transform: translateX(${props => props.showWork === true ? '0px' : '40px'});
                    transition: all 0.5s ease-in-out 0.5s;
                    display: block;
                }
                h4 {
                    opacity: ${props => props.showWork === true ? 1 : 0};
                    transform: translateX(${props => props.showWork === true ? '0px' : '40px'});
                    transition: all 0.5s ease-in-out 0.8s;
                    display: block;
                    font-weight: 100;
                    font-size: 12px;
                    letter-spacing: 4px;
                }
            }
            .text-container {
                margin-top: 40px;
                .text {
                    font-weight: 400;
                    font-family: 'Muli', sans-serif;
                    font-size: 16px;
                    line-height: 27px;
                    ${media.phone`
                        font-size: 13px;
                        line-height: 17px;
                    `}
                    opacity: ${props => props.showWork === true ? 1 : 0};
                    transform: translateX(${props => props.showWork === true ? '0px' : '40px'});
                    transition: all 0.5s ease-in-out 1.1s;
                    display: block;
                }
            }
        }
        .poster-gradient {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0px;
            left: 0px;
            background: -moz-linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.8) 100%); /* ff3.6+ */
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0,0,0,0.8)), color-stop(30%, rgba(0,0,0,0)), color-stop(70%, rgba(0,0,0,0)), color-stop(100%, rgba(0,0,0,0.8))); /* safari4+,chrome */
            background: -webkit-linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.8) 100%); /* safari5.1+,chrome10+ */
            background: -o-linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.8) 100%); /* opera 11.10+ */
            background: -ms-linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.8) 100%); /* ie10+ */
            background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.8) 100%); /* w3c */
        }
    }
`

class Work extends Component {
    render() {
        return (
            <W showWork={this.props.showWork}>
                <div className="container-fluid">
                    <div className="row poster" style={{backgroundImage: 'url('+ this.props.image +')'}}>
                        <div className="col-md-12">
                            <div className="poster" >
                                <div className="header">
                                    <div className="text-content">
                                        <h2>{this.props.title}</h2>
                                         <h4>{this.props.subtitle}</h4> 
                                    </div>
                                    <div className="text-container">
                                        <div className="text">
                                            {this.props.text}
                                        </div>
                                    </div>
                                </div>
                                <div className="poster-gradient"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </W>
        );
    }
}

export default Work;
