import React, { Fragment, memo } from 'react';

const Button = memo((props) => {
    const { title, clickHandler, clickedTimes } = props;
    console.log('Button=====>',props);
    return (
        <Fragment>
            <button onClick={clickHandler}>{title}</button>
            <label>{title}: <span>{clickedTimes}</span></label>
        </Fragment>
    )

});

export default Button;
