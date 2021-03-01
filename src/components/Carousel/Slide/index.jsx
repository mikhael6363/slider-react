import React, { Component } from 'react';
import FullScreen from '../Fullscreen';
import cx from 'classnames';
import styles from './Slide.module.scss';

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isPlay: false,
    };
  }

  start = () => {
    this.props.slideShowOn();
  };
  stop = () => {
    this.props.slideShowOff();
  };

  getPlay = () => {
    const { isPlay } = this.state;
    this.setState({
      isPlay: !isPlay,
    });
    if (isPlay) {
      this.stop();
    } else {
      this.start();
    }
  };

  fullScreenHandle = () => {
    const { isVisible } = this.state;
    this.setState({
      isVisible: !isVisible,
    });
  };

  render() {
    const {
      currentSlide: { src, title, description },
      prevBtn,
      nextBtn,
      currentSlide,
    } = this.props;
    const { isVisible, isPlay } = this.state;
    return (
      <>
        <article className={`${styles.slideContainer}`}>
          <div className={styles.slideWrapper}>
            <div className={styles.imgWrapper}>
              <div className={styles.imgResponsive}>
                <img className={styles.slideImg} src={src} alt={title} />
              </div>
            </div>

            <div className={styles.controlsWrapper}>
              <button
                className={`${styles.controlBtn} ${styles.prevBtn}`}
                onClick={prevBtn}
              >
                <i className='fas fa-chevron-circle-left'></i>
              </button>
              <button
                className={`${styles.controlBtn} ${styles.nextBtn}`}
                onClick={nextBtn}
              >
                <i className='fas fa-chevron-circle-right'></i>
              </button>

              {isPlay ? (
                <button
                  className={`${styles.controlBtn} ${styles.playBtn}`}
                  onClick={this.getPlay}
                >
                  <i className='fas fa-pause'></i>
                </button>
              ) : (
                <button
                  className={`${styles.controlBtn} ${styles.playBtn}`}
                  onClick={this.getPlay}
                >
                  <i className='fas fa-play'></i>
                </button>
              )}

              <button
                className={`${styles.controlBtn} ${styles.fullScreenBtn}`}
                onClick={this.fullScreenHandle}
              >
                <i className='fas fa-expand'></i>
              </button>
            </div>
          </div>

          <div className={styles.textWrapper}>
            <h3 className={styles.slideTitle} title={title}>
              {title}
            </h3>
            <p className={styles.slideDescription} title={description}>
              {description}
            </p>
          </div>
        </article>
        <FullScreen
          isVisible={isVisible}
          currentSlide={currentSlide}
          fullScreenHandle={this.fullScreenHandle}
        />
      </>
    );
  }
}
