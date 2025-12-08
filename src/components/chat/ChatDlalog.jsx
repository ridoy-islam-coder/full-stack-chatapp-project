import { Box, Dialog,styled } from '@mui/material';
import React from 'react';
import ImtyChat from './chat/ImtyChat';
import MenuItem from './menu/MenuItem';



const ChatDlalog = () => {

const Component = styled(Box)`
    display: flex;
`;

const LeftComponent = styled(Box)`
    min-width: 450px;
`;

const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;  


const dialogStyle = {
    height: '95%',
    margin:'20px',
    width: '100%',
    borderRadius: 0,
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden',
}
    return (
        <Dialog open={true}  PaperProps={{ sx: dialogStyle }} hideBackdrop={true} maxWidth={'md'}>

          <Component>
           <LeftComponent>
           <MenuItem/>
           </LeftComponent>
         
          <RightComponent>
            <ImtyChat/>
           </RightComponent>
          </Component>




        </Dialog>
         
    );
};

export default ChatDlalog;