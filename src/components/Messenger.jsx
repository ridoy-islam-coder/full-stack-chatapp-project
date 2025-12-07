import {AppBar , Toolbar,styled, Box } from '@mui/material';
import LoginDlalog from './account/LoginDlalog';

const Messenger = () => {
 const Component = styled(Box)`
    height:100vh;
    background-color:#DCDCDC;
`;

   const Header = styled(AppBar)`
    height:220px;
    background-color:#00bfa5;
    box-shadow:none;
    `;




    return (
        <Component>
            <Header>
                <Toolbar>

                </Toolbar>
            </Header>
           <LoginDlalog/> 
        </Component>
    );
};

export default Messenger;