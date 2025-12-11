import { Box, styled, Typography } from '@mui/material';


// const component =styled(Box)`
// display:flex;
// padding:13px 0px;
// height:45px;
// cursor:pointer;

// `;

// const Image = styled('img')({
//     width: 50,
//     height: 50,
//     objectFit: 'cover',
//     borderRadius: '50%',
//     padding: '0 14px'
// })




// const Userliste = ({user}) => {
//     return (
//         <component>
//             <Box>
//              <Image src={user.picture} alt="dp" />
//             </Box>
//             <Box>
//              <Box>
//                <Typography>{user.name}</Typography>
              
//             </Box>
//             </Box>
//         </component>
//     );
// };

// export default Userliste;

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

// const SubText = styled(Typography)`
//   font-size: 13px;
//   color: #555;
// `;

const Userliste = ({ user }) => {
  return (
    <UserContainer>
      <Image src={user.picture} alt="dp" />
      
      <UserInfo>
        <NameText>{user.name}</NameText>
       
      </UserInfo>
    </UserContainer>
  );
};

export default Userliste;