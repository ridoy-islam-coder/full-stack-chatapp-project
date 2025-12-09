import { Drawer } from '@mui/material';

const InfoDrawer = ({open, setOpen}) => {

  const handleClose=()=>{
    setOpen(false);
}



    return (
       <Drawer
      
      open={open}
      onClose={handleClose}
    >
        <div>Info Drawer Content</div>
    </Drawer>
    );
};

export default InfoDrawer;