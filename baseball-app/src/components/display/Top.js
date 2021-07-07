import React from 'react';

import { Box, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    section: {
        marginBottom: '50px',
        marginTop: '30px'
    }

})

const Top = ( { homeScore, inning, guestScore } ) => {

    const classes = useStyles();

    return (
        <Box className={classes.section} display='flex' flexDirection='row' justifyContent='space-between'>
            <Box data-testid='home' display='flex' flexDirection='column' alignItems='center'>
                <h1>HOME</h1>
                <h2>{homeScore}</h2>
            </Box>
            <Box data-testid='inn' display='flex' flexDirection='column' alignItems='center'>
                <h1>INN</h1>
                <h2>{inning}</h2>
            </Box>
            <Box data-testid='guest' display='flex' flexDirection='column' alignItems='center'>
                <h1>GUEST</h1>
                <h2>{guestScore}</h2>
            </Box>
        </Box>
        
    )
};

export default Top;