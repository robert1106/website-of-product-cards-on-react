import React from "react";
import './orders.css'
import Button from "../../Button/button";

export default function Orders() {
    return(
        <div className="orders-box">
            <div className="orders">
                <ul className="orders-content" />
                <Button value = 'orders' price = '0' />
            </div>
        </div>
    )
}