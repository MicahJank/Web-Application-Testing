import React from 'react';
import Top from './Top.js';
import Bottom from './Bottom.js';

import { Box, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    main: {
       width: '80%' 
    },
 
 })

const Display = ( { displayInfo } ) => {


    const classes = useStyles();

    return (
        <Box className={classes.main} display='flex' flexDirection='column' justifyContent='center'>
            <Top homeScore={displayInfo.homeScore} inning={displayInfo.inning} guestScore={displayInfo.guestScore} />
            <Bottom balls={displayInfo.balls} strikes={displayInfo.strikes} fouls={displayInfo.fouls} outs={displayInfo.outs} />
        </Box>
    )
};

export default Display;