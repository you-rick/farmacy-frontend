import React from 'react';
import styles from './Preloader.module.scss';

let Preloader = () => {
    return (
        <div className={styles.spinnerWrap}>
            <div className={styles.spinner}>
            </div>
        </div>
    );
};

export default Preloader;
