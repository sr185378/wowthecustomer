import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { connect } from 'react-redux';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CSS/Menu.css';

function ImgMediaCard({data,index,Cart,addItem}) {

  const handleClick = () =>{
    addItem(data);
  }
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={data.imageURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Item Cost: ${data.Price}  Rewards Point:${data.Price/10}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>handleClick()}>Add To Cart</Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    Cart:state.Cart
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (data)=> {
      dispatch({type:"ADD_ITEM",payload:data});
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ImgMediaCard)