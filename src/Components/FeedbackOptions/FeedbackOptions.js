import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ incrementGoodFeedbacks, incrementNeutralFeedbacks, incrementBadFeedbacks, onLeaveFeedback }) => (
    <>
        <button type='button' className={styles.good} onClick={incrementGoodFeedbacks}>Good</button>
        <button type='button' className={styles.neutral} onClick={incrementNeutralFeedbacks}>Neutral</button>
        <button type='button' className={styles.bad} onClick={incrementBadFeedbacks}>Bad</button>
    </>
);

export default FeedbackOptions;