import { useEffect,useState, } from "react";
import { getUsers } from "../../../service/api";
import { Box, Divider, styled } from "@mui/material";

import Userliste from "./Userliste";
// import { AuthContext } from "../../../context/AccountProvider";


const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;


const Conversations = ({text}) => {

    const [users, setUsers] = useState([]);
    // const {account}=useContext(AuthContext);

     
   useEffect(() => {
    const fetchData = async () => {
        let response = await getUsers();
           let fiteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(fiteredData);
    }
    fetchData();
   }, [text])   



    return (
        <Component>
          {
            users.filter(user => user.userId && user.name).map(user => (
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
