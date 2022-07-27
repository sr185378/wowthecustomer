import React,{useState} from 'react'
import { connect } from 'react-redux';
import PromoAndCombos from './PromoAndCombos';
import MenuData from './MenuData';
import MenuList from './Data/MenuList'
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CSS/Menu.css';
import CartList from './CartList';
function Menu(props) {
  const [car,setCar] = useState(false);
  const handleModal = () =>{
    setCar(true);
    props.openModal();
  }
  return (
    <div className="container Menu">
        <div className="row headerBody"> 
          <div className="col headerName">
            <h3 className="header"> WOW The Customer </h3> 
          </div>
          <div className="col cart"><Button variant="contained" onClick={() => handleModal()}><AddShoppingCartIcon /></Button></div>
        </div>
       <div className="row bodyMenu">
          <div className="row promoAndCombos">
            <PromoAndCombos />
          </div>
          <div className="grid-container menuData">
            {MenuList.map((data,index) => <div className="col cartButton"><MenuData data={data} index={index} /></div>)}
          </div>
       </div>
       {car && <CartList setCar={setCar}/>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    Cart: state.Cart,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: ()=> {
      dispatch({type:"OPEN_MODAL"});
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);