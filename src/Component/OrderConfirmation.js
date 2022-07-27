import React,{ useState ,useEffect} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import './CSS/OrderConfirmation.css';
import CartItem from './CartItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ViewOffer from './ViewOffer';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function TransitionsModal({closeModal,openModal,setOpenOrder,setCar,Cart}) {
  const handleClose = () => {
    setOpenOrder(false);
    setCar(false);
    closeModal();
  };
  const [total,setTotal] = useState(0);
  useEffect(() =>{
    let sum=0;
    for(let i=0;i<Cart.length;i++){
        sum=sum+Cart[i].Price;
    }
    setTotal(sum);
    },[Cart, Cart.length])
    const handleSubmit =()=>{
        alert("Thank you for order!!!");
        handleClose();
    }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
                <div className="container OrderConfirmation">
                    <div className="row OrderHeader">Order Confirmation</div>
                    <div className="OrderBody">
                       <div className="orderSummary">
                            <div className="orderSummaryHeader">Order Details</div>
                            <div className="row cartBody">
                                {Cart.map((data,index)=><CartItem data={data}/>)}
                            </div>
                            <div className="row totalBlock">
                                <div className="col total">Total</div>
                                <div className="col price">${total}</div>
                            </div>
                       </div>
                       <div className="Payment">
                            <div className="paymentHeader">Payment</div>
                            <div className="paymentDetails">
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        className="radio"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="UPI" />
                                        <FormControlLabel value="male" control={<Radio />} label="Credit Card" />
                                        <FormControlLabel value="other" control={<Radio />} label="Debit Card" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div className="paymentComps">
                                <div className="paymentComps">Comps&Promos</div>
                                <ViewOffer />
                            </div>
                            <Button variant="contained" className="SubmitOrder" onClick={handleSubmit}>Submit Order</Button>
                       </div>
                    </div>
                </div>
          </Box>
        </Fade>
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

export default connect(mapStateToProps,mapDispatchToProps)(TransitionsModal)