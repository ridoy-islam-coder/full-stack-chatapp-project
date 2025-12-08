import { Box, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';


const InputBar = () => {
    return (
        <Box>
            <Box>
            <Box>
            <SearchIcon/>
           </Box>
          <InputBase
            placeholder='Search or start new chat'
            inputProps={{'aria-label':'search'}}
            />







        </Box>
        </Box>
    );
};

export default InputBar;