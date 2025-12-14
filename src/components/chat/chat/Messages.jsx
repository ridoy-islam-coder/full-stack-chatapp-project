import { Box, styled } from '@mui/material';
import Footer from './Footer';
import { useContext, useEffect, useState } from 'react';
import { AuthContext  } from '../../../context/AccountProvider';
import { newMessage,getMessage } from '../../../service/api';
import Message from './Message';


const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;


const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 80px;
`;


const Messages = ({person,conversation}) => {
    const {account}=useContext(AuthContext);
    const  [value,setvalue]=useState('');
    const [messages, setMessages] = useState([]);
    const [newMessageFlag,setnewMessageFlag]=useState(false);

  useEffect(()=>{
    const getMessageDetails=async()=>{
      let data=await getMessage(conversation._id);
      setMessages(data);
    }
   conversation._id && getMessageDetails();
  },[person._id,conversation._id,newMessageFlag])





  const sendtext=async(e)=>{
    const code= e.keyCode || e.which;
    if(code===13){
       let message={
        senderID:account.sub,
        receiverID:person.userId.sub,
        conversationID:conversation._id,
        type:'text',
        text: value
       }
    await newMessage(message);
    setvalue('');
    setnewMessageFlag(prev =>!prev)
    }
}






    return (
        <Wrapper>
            <Component>
              {
                messages && messages.map(message=>(

                <Container>    
                  <Message message={message}/>
                </Container>
                
                ))
              }

            </Component>
            <Footer sendtext={sendtext} setvalue={setvalue}  value={value}/>
        </Wrapper>
    );
};

export default Messages;