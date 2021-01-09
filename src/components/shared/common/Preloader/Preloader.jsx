import React, { memo } from 'react';
import styles from './Preloader.module.scss';

const Preloader = memo(() => (
  <div className={styles.spinnerWrap}>
    <div className={styles.spinner} />
  </div>
));

export default Preloader;
