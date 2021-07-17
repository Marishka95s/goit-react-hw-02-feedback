import React from 'react';
import styles from './Statistics.module.css';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
    <>
        <p className={styles.good}>Good: <b>{good}</b></p>
        <p className={styles.neutral}>Neutral: <b>{neutral}</b></p>
        <p className={styles.bad}>Bad: <b>{bad}</b></p>
        
        {(total !== 0) ? 
        <>
            <p><b>Total feedbacks: {total}</b></p>
            <p className={styles.good}>Positive feedbacks: <b>{positivePercentage}%</b></p><h3>Thank you for attention our cafe Expresso :) </h3>
        </> : "No feedback given"}
    </>
)};

export default Statistics;