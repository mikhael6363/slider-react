import React, { Component } from 'react';
import carouselData from './CarouselDB';
import Slide from './Slide';
import styles from './Slide/Slide.module.scss';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: carouselData,
      currentIndex: 0,
      setIntervalId: null,
      slideShowDelay: 3,
    };
  }
  slideShowOn = () => {
    const { slideShowDelay } = this.state;
    this.setState({
      setIntervalId: setInterval(
        () => this.getNextSlide(),
        slideShowDelay * 1000
      ),
    });
  };
  slideShowOff = () => {
    const { setIntervalId } = this.state;
    clearInterval(setIntervalId);
  };

  getNextSlide = () => {
    const { slides, currentIndex } = this.state;
    const newIndex = JSON.parse(JSON.stringify(currentIndex));
    this.setState({
      currentIndex: (newIndex + 1) % slides.length,
    });
  };
  getPrevSlide = () => {
    const { slides, currentIndex } = this.state;
    const newIndex = JSON.parse(JSON.stringify(currentIndex));
    this.setState({
      currentIndex: (newIndex - 1 + slides.length) % slides.length,
    });
  };
  render() {
    const { slides, currentIndex } = this.state;

    return (
      <section className={styles.carouselContainer}>
        <Slide
          currentSlide={slides[currentIndex]}
          prevBtn={this.getPrevSlide}
          nextBtn={this.getNextSlide}
          slideShowOn={this.slideShowOn}
          slideShowOff={this.slideShowOff}
        />
      </section>
    );
  }
}
