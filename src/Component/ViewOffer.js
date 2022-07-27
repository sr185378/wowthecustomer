import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './CSS/OrderConfirmation.css';
import Promos from './Data/Comps';
export default function BasicSelect() {
  const [offer, setOffer] = React.useState(Promos[0].Code);

  const handleChange = (event) => {
    setOffer(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} className="Apply">
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={offer}
          onChange={handleChange}
        >
          
          {Promos.map((pro,index)=>{
            return <MenuItem value={pro.Code}>{pro.Code}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
