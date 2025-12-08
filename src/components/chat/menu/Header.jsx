
import { useContext } from "react";
import { AuthContext } from "../../../context/AccountProvider";
import { Box ,styled} from "@mui/material";
import { Chat as MessageIcon } from '@mui/icons-material';
import HeaderManu from "./HeaderManu";



const Header = () => {
  
const Component = styled(Box)`
   hight:44px;
   background-color:#ededed;
    padding:8px 16px;
    display:flex;
    align-items:center;
    justify-content:space-between;
  
`;

const Wrapper = styled(Box)`
    margin-left:auto;
    & > * {
        margin-left:2px;
        padding:8px;
        color:#000;
    };
    & > :first-child {
        font-size:22px;
        margin-right:8px;
        margin-top:3px;
    }
`;



const Image = styled('img')`
    height:40px;
    width:40px;
    border-radius:50%;
`;



    const { account } = useContext(AuthContext);
    return (
        <>
         <Component>
            <Image src={account.picture} alt="profile" />
            <Wrapper> 
            <MessageIcon />
            <HeaderManu />
            </Wrapper>
         </Component>
        </>
    );
};

export default Header;