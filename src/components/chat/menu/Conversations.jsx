import { useEffect,useState, } from "react";
import { getUsers } from "../../../service/api";
import { Box, Divider, styled } from "@mui/material";

import Userliste from "./Userliste";
// import { AuthContext } from "../../../context/AccountProvider";


const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`;


const Conversations = () => {

    const [users, setUsers] = useState([]);
    // const {account}=useContext(AuthContext);

     
   useEffect(() => {
    const fetchData = async () => {
        let response = await getUsers();
       setUsers(response);
    }
    fetchData();
   }, [])   



    return (
        <Component>
          {
            users.map(user => (
            //    user.email !== account.email &&
              <>
                 <Userliste user={user} />
                 <Divider style={{ margin: '0 0 0 67px', backgroundColor: '#e9edef',opacity: '0.6' }} />
              </>
             
              
            ))
          }

      


        </Component>
    );
};

export default Conversations;