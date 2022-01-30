import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'
import {useDispatch,useSelector} from 'react-redux';
import { logOut } from '../actions/userAction';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';

const renderDetailsButton = (params) => {
  return (
    <Button
      variant="contained"
      style={{ padding: "6px" }}
      
    >
      Request
    </Button>
  );
};

const columns = [
  { field: 'id', headerName: 'S No.', width: 90 },
  {
    field: 'OrganisationName',
    headerName: 'Name of the Organisation',
    width: 250,
    editable: true,
  },
  {
    field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: renderDetailsButton,
  },
];

const rows = [
  { id: 1, OrganisationName: 'One Piece', Action: 'Button'},
];


export const HomePage = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const logoutHandle=()=>{
       dispatch(logOut());
       navigate('/login');
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (<>
  <header>
    <h2><a href="#">Life is a party!</a></h2>
    <nav>
      <li><a href="#">Tours</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </nav>
  </header>
  <div>
 
    <div style={{ height: 400, width: '75%', marginTop: 75, marginLeft:125 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    <div style={{ marginTop:40, marginLeft:575}}> 
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Organisation
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Organisation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the detail regarding Organisation Creation!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name of the organisation"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
    
    </div>
    <div className="text-center">
            <h1>welcome to our app</h1>
  
                <button className="primary-button" onClick={logoutHandle}>Log out</button>
        </div>
  </>);
};
