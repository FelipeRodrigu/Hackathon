import React, { forwardRef } from 'react';
import styles from "./index.module.css";

const BigNews = forwardRef(({ url, title, description }) => {
    return (
        <div 
            className={styles.BigNewsContainer} 
            style={{backgroundImage: `url(${url})`}}
        >
            <div className={styles.BigNewsTextWrapper}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
});

export default BigNews;