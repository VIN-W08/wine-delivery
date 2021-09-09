import React from 'react';
import { FaRegBookmark } from "react-icons/fa";
import Popup from 'reactjs-popup';
import { colors } from "../utilities/colors.js"
import "../styles/wineGrid.css"

const PopUp = (props) => {
    return (
        <Popup
            trigger={props.children}
            modal
            nested
            className="pop-up">
            { 
                close => (
                    <div className="modal">
                        <button className="close" onClick={close}>X</button>
                        <div class="container-message">
                            <p className="message">{props.message}</p>
                        </div>
                    </div>
                )  
            }
        </Popup>
    )
}

export default function WineGrid(props){
    return (
        <div className="container-wine">
            <img src={props.image} className="image-wine"/>
            <div className="right">
                <div className="texts-wine">
                    <div>
                        <p className="name-wine">{props.name}</p>
                        <p className="varietes-wine">{props.varietes}</p>
                        <p className="location-wine">{`${props.region}, ${props.country}`}</p>
                    </div>
                </div>
                <div>
                    <div className="price-and-left-wine">
                        <p className="price-wine">{`S$${props.price}`}</p>
                        {
                            props.qty <= 5 ? 
                            <p className="qty-wine">{props.qty} Left</p> : <div/>
                        }
                    </div>
                    <hr className="line-break"/>
                    <div className="btns-add">
                        <PopUp message={`${props.name} is added to cart`}>
                            <button className ="btn-add-cart">ADD TO CART</button>
                        </PopUp>
                        <PopUp message={`${props.name} is bookmarked`}>
                            <FaRegBookmark className="btn-add-bookmark" color={colors.brownGold} size={25}/>
                        </PopUp>
                    </div>
                </div>
            </div>
        </div>
    )
}