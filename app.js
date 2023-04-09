import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img class="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
                    alt="">
                </img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-container">
                <ResCard resName="McDonald's" resCuisine="Burgers,Beverages" resRating="4.4 stars" resDeliveryTime="38 mins" ></ResCard>
                <ResCard resName="Kfc" resCuisine="Burgers and Beverages" resRating="4.6 stars" resDeliveryTime="30 mins"></ResCard>
            </div>
        </div>
    )
}
const styleCard = {
    backgroundColor: "yellow"
}

const ResCard = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <img alt="res-logo" className="res-card-logo"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/7bb739d7f6ae8b4ce8ed590765dffd2f"></img>
            <h3>{props.resName}</h3>
            <h4>{props.resCuisine}</h4>
            <h4>{props.resRating}</h4>
            <h4>{props.resDeliveryTime}</h4>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">

        </div>
    )
}

const AppLayput = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayput());