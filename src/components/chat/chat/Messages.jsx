import { Box, styled } from '@mui/material';
import Footer from './Footer';
import { useContext, useEffect, useState } from 'react';
import { AuthContext  } from '../../../context/AccountProvider';
import { newMessage,getMessage } from '../../../service/api';
import Message from './Message';
import { useRef } from 'react';


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
    const [file,setFile]=useState();
    const [image,setImage]=useState('')
    const  scrollRef=useRef()

  useEffect(()=>{
    const getMessageDetails=async()=>{
      let data=await getMessage(conversation._id);
      setMessages(data);
    }
   conversation._id && getMessageDetails();
  },[person._id,conversation._id,newMessageFlag])

useEffect(()=>{
  scrollRef.current?.scrollIntoView({ transition: "smooth"})
  },[messages])




const sendtext = async (e) => {
  const code = e.keyCode || e.which;

  if (code === 13) {

    let message; // ✅ message declare করা হলো
    const receiverId = person.sub; // ✅ receiverId define

    if (!file) {
      message = {
        senderId: account.sub,
        receiverId: receiverId,
        conversationId: conversation._id,
        type: 'text',
        text: value
      };
    } else {
      message = {
        senderId: account.sub,
        receiverId: receiverId,
        conversationId: conversation._id,
        type: 'file',
        text: image
      };
    }

    await newMessage(message);
    setvalue('');
    setFile('');
    setImage('');
    setnewMessageFlag(prev => !prev);
  }
};





    return (
        <Wrapper>
            <Component>
              {
                messages && messages.map(message=>(

                <Container  ref={scrollRef}>    
                  <Message message={message}/>
                </Container>
                
                ))
              }

            </Component>
            <Footer sendtext={sendtext} setvalue={setvalue}  value={value} file={file} setFile={setFile} setImage={setImage}/>
        </Wrapper>
    );
};

export default Messages;