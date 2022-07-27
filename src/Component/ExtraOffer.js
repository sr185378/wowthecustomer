import * as React from 'react';
import Box from '@mui/material/Box';
import { connect } from 'react-redux';
import './CSS/OrderConfirmation.css'
import Modal from '@mui/material/Modal';
import Promos from './Data/Comps';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModalForExtraoffers({closeModal,openModal,setViewOffer}) {
  const handleClose = () => {
    setViewOffer(false);
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
            <div className="container1">
                <img src="https://thumbs.dreamstime.com/b/special-offer-price-tag-sign-paper-against-rustic-red-painted-barn-wood-55863934.jpg" className="img" alt="..."></img>
                <div className="centered1">{`Nearest eligible offer on spending $5 extra - ${Promos[0].Name}, Use Code ${Promos[0].Code}`}</div>
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

export default connect(mapStateToProps,mapDispatchToProps)(BasicModalForExtraoffers)

