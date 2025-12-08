
import { useContext } from "react";
import { AuthContext } from "../../../context/AccountProvider";
import { Box ,styled} from "@mui/material";


const Header = () => {
  
const Component = styled(Box)`
   hight:44px;
   background-color:#ededed;
    padding:8px 16px;
  
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
         </Component>
        </>
    );
};

export default Header;