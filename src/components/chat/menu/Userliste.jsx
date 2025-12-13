import { Box, styled, Typography } from '@mui/material';

import { AuthContext } from '../../../context/AccountProvider';
import { useContext } from 'react';
import { setConversation } from '../../../service/api';

const UserContainer = styled(Box)`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  margin-bottom: 6px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #f3f3f3;
    transform: scale(1.01);
  }
`;

const Image = styled('img')({
  width: 48,
  height: 48,
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: '12px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.15)'
});

const UserInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NameText = styled(Typography)`
  font-weight: 600;
  font-size: 16px;
`;


const Userliste = ({ user }) => {


 const { setPerson, account}  = useContext(AuthContext);

// account

    const getUser = async () => {
        setPerson(user);
      const res= await setConversation({senderID: account.sub, receiverID: user.userId.sub})
      console.log(res);
    }






  return (
    <UserContainer onClick={()=>getUser()}>
      <Image key={user._id} src={user.picture} alt="dp" />
      
      <UserInfo>
        <NameText>{user.name}</NameText>
       
      </UserInfo>
    </UserContainer>
  );
};

export default Userliste;