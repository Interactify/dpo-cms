import React, { Component } from 'react'
// import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.min.js'
import './slider.css'
import styled from 'styled-components'
import DpoButton from 'components/button/button'
import {media} from 'functions/media-query'
// import Dataset from '../../dataset'
// import Dataset from '../../_slider.json'
import Data from 'cms/data.json'

const WorkDetails = styled.div`
  position: absolute;
  z-index: 2;
  display: block;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translateY(-50%) translateX(-50%);
  h1 {
    font-family: 'Muli', sans-serif;
    font-weight: 800;
    padding: 0px;
    margin: 0px;
    font-size: 48px;
  }
  span {
    font-size: 12px;
  }
`

const SlideC = styled.div`
  .swiper-container {
      width: 100%;
      height: 100vh;
      /* margin-top: 115px; */
  }
  .swiper-gradient {
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      background: -moz-linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.8) 100%); /* ff3.6+ */
      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0,0,0,0.8)), color-stop(30%, rgba(0,0,0,0)), color-stop(70%, rgba(0,0,0,0)), color-stop(100%, rgba(0,0,0,0.8))); /* safari4+,chrome */
      background: -webkit-linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.8) 100%); /* safari5.1+,chrome10+ */
      background: -o-linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.8) 100%); /* opera 11.10+ */
      background: -ms-linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.8) 100%); /* ie10+ */
      background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.8) 100%); /* w3c */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000',GradientType=0 ); /* ie6-9 */
      z-index: 1;
  }
  .swiper-button-prev{
      left: 100px;
  }
  .swiper-button-next{
      right: 100px;
  }
  ${media.phone`
      .swiper-button-prev{
          display: none;
      }
      .swiper-button-next{
          display: none;
      }
  `}
`

const Slide = styled.div`
      background-image: url(${props => props.bg});
      background-image: image("${props => props.bgw}" format('webp'), "${props => props.bg}");
      background-size: cover;
      background-position: center center;
      background-color: #000000;
`

class Slider extends Component {
  state =  {
    dpoSwiper: undefined,
    slides: []
  }
  componentDidMount () {
    setTimeout(()=>{
      this.mySwiper = new Swiper ('.swiper-container', {
        loop: false,
        slidesPerView: 1,
        effect: 'fade',
        speed: 1000,
        autoplay: 5000
      })
    }, 500)
  }
  prevSlide = () => {
    if (this.mySwiper.activeIndex === 0) {
      this.mySwiper.slideTo(this.mySwiper.slides.length, 2000)
    } else {
      this.mySwiper.slidePrev()
    }
  }
  nextSlide = () => {
    if (this.mySwiper.activeIndex === this.mySwiper.slides.length - 1) {
      this.mySwiper.slideTo(0, 2000)
    } else {
      this.mySwiper.slideNext()
    }
  }
  changeSlide = (i) => {
    this.mySwiper.slideTo(i, 2000)
  }
  componentWillMount() {
    this.setState({
      slides: Data._slider
    })
  }
  render() {
    let Slides = this.state.slides.map((dCase, i) => {
      if (dCase.showinslider) {
        let image = dCase.image.replace('/cms/images/','/images/cms/1900/')
        image = encodeURI(image)
        let imageWebp = image.replace('.jpg','.webp')
        return (
          <Slide key={`case-${i}`} className="swiper-slide" bg={image} bgw={imageWebp}>
            <div className="swiper-gradient"></div>
            <WorkDetails>
              <h1 dangerouslySetInnerHTML={{__html: dCase.title}} />
              <span>{dCase.description}</span>
              <div className="show-video">
                <DpoButton t="Play video" margin="30px 0px 0px 0px" vimeoID={dCase.vimeoID} triggerCase={(e) => { this.props.caseClick(dCase.vimeoID) }} />
              </div>
            </WorkDetails>
          </Slide>
        )
      }
    })
    return (
      <SlideC>
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {Slides}
            </div>
            <div className="swiper-button-prev swiper-button-white" onClick={this.prevSlide}></div>
            <div className="swiper-button-next swiper-button-white" onClick={this.nextSlide}></div>
        </div>
      </SlideC>
    );
  }
}

export default Slider;
