import { Box } from '@mui/material';
import  { useState } from 'react';
import Header from './Header';
import InputBar from './InputBar';
import Conversations from './Conversations';



const MenuItem = () => {
 
    const [text,settext] = useState('');




    return (
        <Box>   
          <Header/>
         <InputBar settext={settext} />
         <Conversations text={text} />
        </Box>
    );
};

export default MenuItem;