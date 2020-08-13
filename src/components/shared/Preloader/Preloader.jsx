import React from 'react';
import styles from './Preloader.module.scss';

const Preloader = () => (
  <div className={styles.spinnerWrap}>
    <div className={styles.spinner} />
  </div>
);

export default Preloader;
