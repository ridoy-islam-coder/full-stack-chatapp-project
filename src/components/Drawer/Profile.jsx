import { Box, styled, Typography } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../../context/AccountProvider';



const Imgcontainer = styled(Box)`
    display: flex;
    justify-content: center;
`;
const Image = styled('img')`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    padding: 25px 0;
`;

const BoxWrapper = styled(Box)`
    background: #FFFFFF;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    & :first-child {
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    }
    & :last-child {
        margin: 14px 0;
        color: #4A4A4A;
    }
`;

const DescriptionContainer = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p {
        font-size: 13px;
        color: #8696a0;
    }
`;


const Profile = () => {


    const {account}=useContext(AuthContext);
    return (
        <>
         <Imgcontainer> <Image src={account.picture} alt="dp" /> </Imgcontainer>   
          <BoxWrapper> 
            <Typography>Your Name</Typography>
             <Typography>{account.name}</Typography>
            
            </BoxWrapper>   
           <Box> 
            <DescriptionContainer>This is not your username or pin. This name will be visible to your WhatsApp contacts. </DescriptionContainer>
            
            <BoxWrapper>
            <Typography>About</Typography>
            <Typography>Hey there! I am using WhatsApp.</Typography>
            </BoxWrapper>
            </Box>   
            <Box></Box>   
         
        </>
    );
};

export default Profile;