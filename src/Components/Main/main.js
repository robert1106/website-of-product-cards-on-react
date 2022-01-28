import React from "react";
import './main.css'
import Orders from "./Orders/orders";
import MainContent from "./MainContent/main-content";

export default function Main() {
    return(
        <main>
            <div className="mein-header">
                <div className="container">
                    <h1 className="main-header-title">Mafia</h1>
                </div>
            </div>
            <div className="main-content">
                    <div className="container">
                        <div className="position-blocks">
                            <MainContent />
                            <Orders />
                        </div>
                    </div>
            </div>
        </main>
    )
}