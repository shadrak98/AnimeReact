import React from 'react';
import style from './quote.module.css';

const Quote = ({character, quote}) => {
    return (
        <div className={style.quotes}>
            <h3 className={style.title}>{character}</h3>
            <p className={style.text}>{quote}</p>
        </div>
    );
}

export default Quote;