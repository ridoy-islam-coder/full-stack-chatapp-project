import { MoreVert, Search } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";
import { defaultProfilePicture } from "../../../constants/data";



const Header =styled(Box)`
display:flex;
padding:8px 16px;
height:44px;
background:#ededed;
align-items:center;

`;


const Image = styled('img')({
    height:40,
    width:40,
    objectFit:'cover',
    borderRadius:'50%'
})

const Name = styled(Typography)`
    margin-left:12px !important;
    font-size:18px;
    color:rgb(0,0,0,0.6);
`;
const Status = styled(Typography)`
    margin-left:12px !important;
    font-size:12px;
    color:rgb(0,0,0,0.6);
  
`;
const RightContainer = styled(Box)`
    margin-left:auto;
    & > svg {
        padding:8px;
        font-size:24px;
        color:#000;
    }

`;



const HeaderFild = ({person}) => {
    return (
            <Header>
         <Image src={person.picture || defaultProfilePicture} alt="db" />
          <Box>
            <Name>{person.name}</Name>
            <Status>status</Status>
          </Box>
         <RightContainer>
     
                <Search/>

          
                {/* <AttachFile/> */}
           
          
                <MoreVert/>
            
          </RightContainer>
        </Header>
    );
};

export default HeaderFild;