import React, { useState } from "react";
import './cards.css'
import { menu,KeywordObject } from "../../../../API/menu";
import heartImgInactive from './heart-cards- inactive-img.svg'
import heartImgActive from './heart-cards- active-img.svg'

export default function Cards({keyword}) {

    function clickHeart(like, id) {
        if(like.user){
            menu.find((e) => {
                if(e.id === id) {
                    e.like.user = false;
                    setHeartImg(e.like.user)
                    return console.log(e.like.user, e.id);
                }
            })
        } else {
            menu.find((e) => {
                if(e.id === id) {
                    e.like.user = true;
                    setHeartImg(e.like.user)
                    return console.log(e.like.user, e.id);
                }
            })
        }
    }

    const [heartImg, setHeartImg] = useState()

    function heartImgCheck(likeUser, id) {
        if(heartImg) {
            return heartImgActive;
        } else {
            return heartImgInactive;
        }
    }

    return(
        <>
            <h2 className="tab-cards-title">{keyword}</h2>
            <ul className="tab-cards">
                {KeywordObject(keyword).map((card, index) => {
                    return(
                        <li className="tab-card" key={index+"card"}>
                            <img className="tab-card-img" src={card.productImageUrl} alt="image product"/>
                            <div>
                                <span className="tab-card-productName">{card.productName}</span>
                                <p className="tab-card-ingredients">{card.ingredients}</p>
                            </div>
                            <div className="position-blocks">
                                <span className="tab-card-price">{card.price} грн.</span>
                                <img src={heartImgCheck(card.like.user, card.id)}
                                     alt="heart img"
                                     onClick={() => clickHeart(card.like, card.id)}/>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}