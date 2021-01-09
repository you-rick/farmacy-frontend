import React, { memo } from 'react';
import styles from './SmallPreloader.module.scss';

const SmallPreloader = memo(() => (
  <div className={styles.loader} />
));

export default SmallPreloader;
