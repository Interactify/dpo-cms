import React, { Component } from 'react'
import styled from 'styled-components'

const LogoSvg = styled.svg`
    width: ${props => props.width || '50'}px;
    height: ${props => props.height || '50'}px;
    display: inline-block;
    transform: ${props => props.tcolor === '#000000' ? 'rotate(360deg)' : 'rotate(0deg)'};
    transition: all ease-in-out 0.5s;
    .cls-2 {
        transition: ease-in-out stroke 1s;
        stroke-width:6;
        stroke-miterlimit:10;
        fill:none;
        stroke: ${props => props.tcolor || '#000000'};
    }
    .cls-3 {
        transition: ease-in-out stroke 1s;
        stroke-width:6;
        stroke-miterlimit:10;
        fill:none;
        stroke-dasharray:12,10;
        stroke: ${props => props.tcolor || '#000000'};
    }
    .cls-1 {
        fill: ${props => props.bcolor || "#FFFFFF"};
        transition: ease-in-out fill 1s;
    }
`

class Logo extends Component {
  render() {
    return (
        <LogoSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352.9 352.9" height={this.props.height} width={this.props.width} tcolor={this.props.tcolor} bcolor={this.props.bcolor}>
            <circle className="cls-1" cx="176.4" cy="176.4" r="176.4"/>
            <path className="cls-3" d="M175.6,38.4c0.3,93.8,0.6,187.6,0.9,281.4"/>
            <path className="cls-2" d="M175,311.8c-44.3-27.4-67.9-32.9-67.9-62.8c0-48.3,127.2-89.4,143.3-131.9c12.1-32.1-17.2-64.3-72.4-75.8"/>
        </LogoSvg>
    );
  }
}

export default Logo;
