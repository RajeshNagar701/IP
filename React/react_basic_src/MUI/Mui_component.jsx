/*

https://mui.com/material-ui/

Ready to use
Material Design components
Material UI is an open-source React component library that implements Google's Material Design.
 It's comprehensive and can be used in production out of the box.

npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid



 */


import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

function Mui_component() {
    return (
        <div>
            <h1>Mui_component</h1>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <hr />
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </div>
    )
}

export default Mui_component