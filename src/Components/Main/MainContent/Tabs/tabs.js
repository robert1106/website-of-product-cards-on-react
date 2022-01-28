import React, { useState } from "react";
import './tabs.css'
import { Keywords } from "../../../API/menu";
import Cards from "./Cards/cards";

export default function Tabs({productList, onClick}) {

    function toggleTab(keyword){
        let classes = ['tab-item'];
        if(keyword === productList) {
            classes.push('active-tab')
        }
        return classes.join(' ');
    }

    return(
        <ul className="tabs-list">
            { Keywords().map((keyword, index) => {
                    return(
                            <li className={toggleTab(keyword)}
                                onClick={() => onClick(keyword)}
                                key={index+"tab"}>{keyword}</li>
                        )
                    }
                )}
        </ul>
    )
}