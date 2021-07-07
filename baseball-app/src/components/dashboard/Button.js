import React from 'react';

import { Button as ActionButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    primary: {
        fontSize: '2rem',
        width: '100px'
    }
})

const Button = ( { type, handlerFunction } ) => {

    const classes = useStyles();



    return (
        <ActionButton data-testid={`test`} label='button' onClick={handlerFunction} variant='contained' color='primary' className={classes.primary}>{type}</ActionButton>
    )
};

export default Button; 