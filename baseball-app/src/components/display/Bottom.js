import React from 'react';

import { Box } from '@material-ui/core';

const Bottom = ( { balls, strikes, fouls, outs } ) => {

    return (
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
            <Box data-testid='ball' display='flex' flexDirection='column' alignItems='center'>
                <h1>BALL</h1>
                <h2>{balls}</h2>
            </Box>
            <Box data-testid='strike' display='flex' flexDirection='column' alignItems='center'>
                <h1>STRIKE</h1>
                <h2>{strikes}</h2>
            </Box>
            <Box data-testid='out' display='flex' flexDirection='column' alignItems='center'>
                <h1>OUT</h1>
                <h2>{outs}</h2>
            </Box>
            <Box data-testid='foul' display='flex' flexDirection='column' alignItems='center'>
                <h1>FOUL</h1>
                <h2>{fouls}</h2>
            </Box>
        </Box>
    )
};

export default Bottom;