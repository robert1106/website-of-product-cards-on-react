import React, { useState } from "react";
import './main-contet.css'
import Tabs from "./Tabs/tabs";
import Cards from "./Tabs/Cards/cards";
import { Keywords } from '../../API/menu'

export default function MainContent() {

    const [productList, setProductList] = useState(Keywords()[0]);

    function toggleKeyword(keyword) {
        setProductList(keyword);
    }

    return(
        <div className="container-tabs">
            <Tabs productList={productList} onClick={toggleKeyword}/>
            <Cards keyword = {productList}/>
        </div>
    )
}