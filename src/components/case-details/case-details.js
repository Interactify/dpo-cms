import React, { Component } from 'react'
import styled from 'styled-components'
import Player from '@vimeo/player'
import Spinner from '../spinner/spinner'
import {general} from 'functions/general'

const CaseOverlay = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 80%;
    height: 80%;
    z-index: 10;
    opacity: ${props => props.showCaseOverlay ? '1' : '0'};
    visibility: ${props => props.showCaseOverlay ? 'visible' : 'hidden'};
    .case-video {
        background-color: rgba(0,0,0,1);
        height: 100vh;
        width: 100%;
    }
    .load-overlay {
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: #000000;
        z-index: 11;
        height: 100%;
        width: 100%;
        opacity: ${props => props.loadOverlay ? '1' : '0'};
        visibility: ${props => props.loadOverlay ? 'visible' : 'hidden'};
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .close {
        position: absolute;
        right: 50px;
        top: 10px;
        font-size: 30px;
        z-index: 12;
        img {
            width: 30px;
            height: 30px;
            opacity: 0.8;
            cursor: pointer;
            transform: scale(0.7);
            &:hover {
                opacity: 1;
                transform: scale(1);
            }
        }
    }
`

class CaseDetails extends Component {
    state = {
        buffered: true,
        show: true
    }
    componentDidMount() {
        if (!general.isMobile()) {
            this.iframe = this.refs.vimeoIframe;
            this.player = new Player(this.iframe);
            /* this.player.on('progress', function(progress) {
                if(parseFloat(progress.percent) >= 0) {
                    if (!this.state.buffered) {
                        this.player.setCurrentTime(0)
                        this.player.setVolume(1)
                        this.setState({buffered: true})
                    }
                }
            }.bind(this))
    
            this.player.on('loaded', function(load) {
                this.player.setVolume(0)
                this.player.play()
            }.bind(this)) */
            this.player.on('loaded', function(load) {
                this.player.play()
            }.bind(this))
            setTimeout(()=>{
                this.setState({show: true, buffered: true})
            },100)
        } else {
            this.setState({show: true})
        }
    }
    closeCase = () => {
        this.setState({show: false},()=>{
            setTimeout(function() {
                this.props.closeCase()
            }.bind(this), 1000);
        })
    }
    render() {
        return (
            <CaseOverlay loadOverlay={!this.state.buffered} showCaseOverlay={this.state.show}>
                <div className="case-video">
                    <div className="close" onClick={this.closeCase}>
                        <img src="images/close.svg" alt="close"/>
                    </div>
                    <div className="load-overlay">
                        <Spinner />
                    </div>
                    <iframe title="vimeoplayer" ref="vimeoIframe" src={`https://player.vimeo.com/video/${this.props.vimeoId}`} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
                </div>
            </CaseOverlay>
        );
    }
}

export default CaseDetails;
