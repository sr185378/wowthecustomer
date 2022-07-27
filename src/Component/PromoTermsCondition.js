import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { connect } from 'react-redux';

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

function BasicModalForTC({openModal,closeModal,setTC}) {

    const handleClose=()=>{
        setTC(false);
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
            <div className="tcList">
                <div className=""></div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
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

export default connect(mapStateToProps,mapDispatchToProps)(BasicModalForTC)
