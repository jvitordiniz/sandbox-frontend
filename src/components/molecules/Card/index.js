import React from "react";

const CustomCard = ({data}) => {
  return(
    <div className="card" style={{width:'300px'}}>
      <h5>{data.title}</h5>
      <p>{data.id}</p>
    </div>
  )
}

export default CustomCard