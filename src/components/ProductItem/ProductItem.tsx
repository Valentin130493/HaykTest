import React from "react";
import { cutDescription } from "../../utils/cutString";
import { Modal, Typography } from "@mui/material";


interface ProductItemProps {
  address: string,
  description: string,
  hours: {
    friday:WorkHours,
    monday: WorkHours,
    saturday: WorkHours,
    sunday: WorkHours,
    thursday: WorkHours,
    tuesday: WorkHours,
    wednesday: WorkHours,
  },
  id: number,
  logo: string,
  name: string,
  phone_number: string,
  review: string,
  type: string,
  uid: string,
}
interface WorkHours {
  closes_at:  string,
  is_closed: boolean,
  opens_at:  string,
}

export const ProductItem:React.FC<ProductItemProps> = ({ id,hours,description,logo,review,name,phone_number,uid,type,address}) => {



  return (
    <>
      <div className={"product-block"} >
        <h4  className={"product-block-h4"}>{id}</h4>
        <img className={"product-block-img"} src={logo} alt={name}/>
        <h3 className={"product-block-h3"}>{name}</h3>
        <h3 className={"product-block-h3"}>{type}</h3>
        <h4 className={"product-block-h4"}>{cutDescription(description, 150)}</h4>
      </div>
      <Modal
        open={false}
        // onClose={}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Typography>
        <img src={logo} alt={name}/>
        <p>{review}</p>
        {/*<p>*/}
        {/*  opens_at: {opens_at}<br/>*/}
        {/*  closes_at: {closes_at}<br/>*/}
        {/*  We are {status}*/}
        {/*</p>*/}
        </Typography>
      </Modal>
    </>
  );
};
