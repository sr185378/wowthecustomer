import React from 'react'
import './CSS/TermsCondition.css'

function TCDetails({cat,catData}) {
  return (
    <div className="Details">
        <div className="cat">{cat} - </div>
        {catData==="*"?<div className="data">FOR ALL</div>:<div className="data">{catData}</div>}
    </div>
  )
}

export default TCDetails