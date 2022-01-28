import React from "react";
import './button.css'

export default function Button(option) {
    let classNameBtn = '';
    let nameBtn = '';
    let color = '';
    if(option.value === "input") {
        classNameBtn = "header-btn"
        nameBtn = 'Увійти'
        color = '#EF781A'
    } else if(option.value === "cart") {
        classNameBtn = "header-btn"
        nameBtn = 'Кошик'
        color = '#00D008'
    } else if(option.value === "in-order") {
        classNameBtn = "in-order-btn"
        nameBtn = 'В корзину'
    } else if(option.value === "orders") {
        classNameBtn = "order-btn"
        nameBtn = <>
            <span>Замовити</span>
            <span>{option.price} &#8372;</span>
        </>
    }
    return(
        <button className={classNameBtn} style={{backgroundColor: color}}>{nameBtn}</button>
    )
}