import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (<>
    {options.map(option => 
        <button type='button' key={option} className={styles.[option]} onClick={()=>onLeaveFeedback(option)}>{option}</button>
    )} </>   
);

export default FeedbackOptions;