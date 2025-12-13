import { Box } from '@mui/material';
import Messages from './Messages';
import HeaderFild from './HeaderFild';
import {  useContext, useEffect, useState } from 'react';
import  { AuthContext } from '../../../context/AccountProvider';
import { getConversation } from '../../../service/api';







const ChatBox = () => {
const {person, account}=useContext(AuthContext);
const [conversation, setConversation]=useState({});

useEffect(()=>{
    const getConversationDetails=async()=>{
        if(person?.userId?.sub){
            let data=await getConversation({senderID:account.sub, receiverID:person.userId.sub});
            console.log(data);
            setConversation(data?.conversation || {});
        }
    }
    getConversationDetails();
},[person?.userId?.sub])


    return (
        <Box Style={{height: '75%'}}>
        <HeaderFild  person={person}/>
        <Messages  person={person} conversation={conversation}/>
     
        </Box>
    );
};

export default ChatBox;