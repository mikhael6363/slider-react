import React from 'react';
import styles from '../Slide/Slide.module.scss';

const FullScreen = (props) => {
  const {
    currentSlide: { src, title },
    isVisible,
    fullScreenHandle,
  } = props;
  return (
    <>
      {isVisible ? (
        <div className={styles.fullScreenWrapper}>
          <img className={styles.fullScreenImage} src={src} alt={title} />
          <button
            className={`${styles.controlBtn} ${styles.exitBtn}`}
            onClick={fullScreenHandle}
          >
            <i className='fas fa-times'></i>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default FullScreen;
