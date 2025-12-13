import { Box, styled } from '@mui/material';
import Footer from './Footer';
import { useContext, useState } from 'react';
import { AuthContext  } from '../../../context/AccountProvider';
import { setConversation } from '../../../service/api';

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;


const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;


const Messages = ({person,conversation}) => {
    const {account}=useContext(AuthContext);
    const  [value,setvalue]=useState('');

  const sendtext=(e)=>{
    const code= e.keyCode || e.which;
    if(code===13){
       let message={
        senderID:account.sub,
        receiverID:person.userId.sub,
        conversationID:conversation._id,
        type:'text',
        text: value
       }
       console.log(message);
    }
}






    return (
        <Wrapper>
            <Component>
              

            </Component>
            <Footer sendtext={sendtext} setvalue={setvalue}/>
        </Wrapper>
    );
};

export default Messages;