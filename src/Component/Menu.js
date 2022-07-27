import React from 'react'
import { connect } from 'react-redux';
import PromoAndCombos from './PromoAndCombos';
import MenuData from './MenuData';
import MenuList from './Data/MenuList'
import './CSS/Menu.css';
function Menu(props) {
  console.log("Sachin");
  return (
    <div className="container Menu">
        <div className="row headerName"> <h1 className="header"> WOW The Customer </h1> </div>
        <div className="row promoAndCombos">
          <PromoAndCombos />
        </div>
        <div className="row menuData">
          {MenuList.map((data,index) => <div className="col"><MenuData data={data} index={index} /></div>)}
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    MyName: state.Name,
  };
}

export default connect(mapStateToProps)(Menu);