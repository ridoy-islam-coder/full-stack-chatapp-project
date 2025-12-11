import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';
import InputBar from './InputBar';
import Conversations from './Conversations';



const MenuItem = () => {
    return (
        <Box>   
          <Header/>
         <InputBar/>
         <Conversations/>
        </Box>
    );
};

export default MenuItem;