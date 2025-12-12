import { Box } from '@mui/material';
import Messages from './Messages';
import HeaderFild from './HeaderFild';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AccountProvider';







const ChatBox = () => {
const {person}=useContext(AuthContext);


    return (
        <Box Style={{height: '75%'}}>
        <HeaderFild  person={person}/>
        <Messages  person={person}/>
     
        </Box>
    );
};

export default ChatBox;