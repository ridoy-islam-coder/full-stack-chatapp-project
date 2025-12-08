import { Box, Dialog,List,ListItem,Typography,styled } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import { qrCodeImage } from '../../constants/data';

import { jwtDecode } from "jwt-decode";

const Component = styled(Box)`
    display: flex;
`;
const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;
const QRCOde = styled('img')`
    height:264px;
    width:264px;
    padding:50px 0 0 50px;
`;
const Title = styled(Typography)`
    font-size:26px;
    color:#525252;
    font-weight:300;
    font-family:inherit;
    margin-bottom:25px;
`;


const StyledList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;  

const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden',
}


const LoginDlalog = () => {


   const onLoginSuccess=(res)=>{
    const decoded = jwtDecode(res.credential);
    console.log('Decoded JWT:', decoded);

   }

 const onLoginError=(res)=>{
    console.log('Login Failed:',res);

 }








    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
           <Component>
            <Container>
            <Title variant='h5'>to use WhatsApp on your computer</Title>
             <StyledList>
                <ListItem>1. open WhatsApp on your phone</ListItem>
                <ListItem>2. tap menu or settings and select Linked devices</ListItem>
                <ListItem>3. point your phone to this screen to capture the code</ListItem>
             </StyledList>
            </Container>
     
         <Box style={{ position: 'relative' }}>
            <QRCOde src={qrCodeImage} alt="QR Code" />


            <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(25%)' }}>

                <GoogleLogin
                     onSuccess={onLoginSuccess}
                             onError={onLoginError} />;
            </Box>
         </Box>
        
           </Component>
        </Dialog>
    );
};

export default LoginDlalog;