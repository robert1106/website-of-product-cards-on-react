import React from "react";
import './footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="position-blocks">
                    <ul className="footer-list">
                        <li className="footer-list-item">Про нас</li>
                        <li className="footer-list-item">Контакти</li>
                        <li className="footer-list-item">Партнери</li>
                    </ul>
                    <ul className="footer-list">
                        <li className="footer-telegram" />
                        <li className="footer-facebook" />
                        <li className="footer-instagram" />
                    </ul>
                </div>
            </div>
        </footer>
    )
}