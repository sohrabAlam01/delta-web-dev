import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function MaterialUi(){
    const [value, setValue] = React.useState(1);

    return (

        <>
        <Button  variant="contained" color="error" startIcon={<DeleteIcon />}>Delete</Button>  <br /><br />
        <Button  variant="contained" color="success"  endIcon={<SendIcon />}>Send</Button> <br /><br />
         <br /><br />
         <Box sx={{ '& > legend': { mt: 2 } }}>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue); 
          console.log(newValue);
        }}
      />
      
    </Box>
        </>
       
    )
}