import React, {useContext} from "react";
import {cutDescription} from "../../utils/cutString";
import {Box, Modal, Typography} from "@mui/material";
import {ModalContext} from "../../context/ModalContext";

import "./ProductItem.css"
import {boxStyles} from "../../constants/modalStyles";

interface ProductItemProps {
    address: string,
    description: string,
    hours: {
        friday: WorkHours,
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

export interface WorkHours {
    closes_at: string,
    is_closed: boolean,
    opens_at: string,
}

export const ProductItem: React.FC<ProductItemProps> = ({
                                                            id,
                                                            hours,
                                                            description,
                                                            logo,
                                                            review,
                                                            name,
                                                            phone_number,
                                                            uid,
                                                            type,
                                                            address
                                                        }) => {
    const {open, modal, close} = useContext(ModalContext)

    const showHours = () => {
        let hours_array: string[] = [];
        let today = new Date();

        switch (today.getDay()) {
            case 1:
                hours_array = [hours.monday.opens_at, hours.monday.closes_at, hours.monday.is_closed ? "open now" : 'closed, sorry']
                break
            case 2:
                hours_array = [hours.tuesday.opens_at, hours.tuesday.closes_at, hours.tuesday.is_closed ? "open now" : 'closed, sorry']
                break
            case 3:
                hours_array = [hours.wednesday.opens_at, hours.wednesday.closes_at, hours.wednesday.is_closed ? "open now" : 'closed, sorry']
                break
            case 4:
                hours_array = [hours.thursday.opens_at, hours.thursday.closes_at, hours.thursday.is_closed ? "open now" : 'closed, sorry']
                break
            case 5:
                hours_array = [hours.friday.opens_at, hours.friday.closes_at, hours.friday.is_closed ? "open now" : 'closed, sorry']
                break
            case 6:
                hours_array = [hours.saturday.opens_at, hours.saturday.closes_at, hours.saturday.is_closed ? "open now" : 'closed, sorry']
                break
            case 7:
                hours_array = [hours.sunday.opens_at, hours.sunday.closes_at, hours.sunday.is_closed ? "open now" : 'closed, sorry']
                break
        }

        return {
            opens_at: hours_array[0],
            closes_at: hours_array[1],
            status: hours_array[2]
        };
    }



    return (
        <>
            <div className={"product-block"} onClick={open}>
                <h4 className={"product-block-h4"}>{id}</h4>
                <img className={"product-block-img"} src={logo} alt={name}/>
                <h3 className={"product-block-h3"}>{name}</h3>
                <h3 className={"product-block-h3"}>{type}</h3>
                <h4 className={"product-block-h4"}>{cutDescription(description, 150)}</h4>
            </div>
            <Modal
                open={modal}
                onClose={close}
            >
                <Box sx={boxStyles}>
                    <img src={logo} alt={name} width={200}/>
                    <Typography>
                        <p>{review}</p>
                    </Typography>
                    <Typography>
                        <p>
                            opens_at: {showHours().opens_at}<br/>
                            closes_at: {showHours().closes_at}<br/>
                            We are {showHours().status}
                        </p>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};
