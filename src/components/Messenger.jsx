import {AppBar , Toolbar,styled, Box } from '@mui/material';
import LoginDlalog from './account/LoginDlalog';
import { useContext } from 'react';
import { AuthContext } from '../context/AccountProvider';
import ChatDlalog from './chat/ChatDlalog';

const Messenger = () => {
  const { account } = useContext(AuthContext);


 const Component = styled(Box)`
    height:100vh;
    background-color:#DCDCDC;
`;

   const Header = styled(AppBar)`
    height:125px;
    background-color:#00A88A;
    box-shadow:none;
    `;

   const LoginHeader = styled(AppBar)`
    height:220px;
    background-color:#00bfa5;
    box-shadow:none;
    `;




    return (
        <Component>
            {
                account ?<> <Header>  <Toolbar>

                       </Toolbar> </Header>   <ChatDlalog/>   </> 
                : <>  
                <LoginHeader>
                <Toolbar>

                </Toolbar>
            </LoginHeader>
           <LoginDlalog/> 
           </>
                }
        </Component>
    );
};

export default Messenger;