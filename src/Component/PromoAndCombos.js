import React, { useState } from "react";
import "./CSS/Carousel.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Promos from './Data/Comps'
import PromoTermsCondition from "./PromoTermsCondition";
import Button from '@mui/material/Button';
import { connect } from 'react-redux';

function Carousel({openModal,handleMenu}) {
  const [currImg, setCurrImg] = useState(0);
  const [tc,setTC] = useState(false);
  const handleTC = () => {
    setTC(true);
    openModal();
  }
  const handlePromos = () => {
    handleMenu(Promos[currImg].ApplicableCategory);
  }
  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${Promos[currImg].imageURL})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center">
          <h1>{Promos[currImg].Name}</h1>
          <Button onClick={() => handlePromos()}>{Promos[currImg].Code}</Button>
          <Button onClick={()=> handleTC()}>T&C</Button>
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < Promos.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
        {tc && <PromoTermsCondition setTC={setTC} data={Promos[currImg]}/>}
      </div>
          
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
    return {
      openModal: ()=> {
        dispatch({type:"OPEN_MODAL"});
      }
    }
  }

export default connect(null,mapDispatchToProps)(Carousel)