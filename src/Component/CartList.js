import React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import CartItem from './CartItem'
import Modal from '@mui/material/Modal';
import { connect } from 'react-redux';
import './CSS/Cart.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModal({Cart,openModal,closeModal,setCar}) {
    const [total,setTotal] =  useState(0);
    useEffect(() =>{
        let sum=0;
        for(let i=0;i<Cart.length;i++){
            sum=sum+Cart[i].Price;
        }
        setTotal(sum);
    },[Cart, Cart.length])
    const handleClose=()=>{
        setCar(false);
        closeModal();
    }
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className="grid-contained">
                <div className="row cartHeader">
                    <h3>CART</h3>
                </div>
                <div className="row cartBody">
                    {Cart.map((data,index)=><CartItem data={data}/>)}
                </div>
                <div className="row totalBlock">
                    <div className="col total">Total</div>
                    <div className="col price">${total}</div>
                </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}


const mapStateToProps = (state) => {
    return {
      Cart: state.Cart,
      openModal: state.openModal
    };
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      closeModal: ()=> {
        dispatch({type:"CLOSE_MODAL"});
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(BasicModal)
