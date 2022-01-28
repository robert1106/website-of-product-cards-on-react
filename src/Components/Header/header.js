import React from "react";
import './header.css'
import Search from "./Serch/search";
import Button from "../Button/button";

export default function Header() {
    return(
        <header className="header">
            <div className="container">
                <div className="position-blocks">
                    <div className="header-left">
                        <a href="#" className="logo-img" />
                        <Search />
                    </div>
                    <div className="header-right">
                        <Button value = "input" />
                        <Button value = "cart" />
                    </div>
                </div>
            </div>
        </header>
    )
}