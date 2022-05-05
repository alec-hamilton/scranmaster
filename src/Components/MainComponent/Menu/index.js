import FoodItem from "./FoodItem";
import OrderButton from "./OrderButton"
import Modal from './Modal'
import {useState} from "react";
import PostOrder from "./PostOrder";

const Menu = ({menuItems, showingMenuItems}) => {

    const initOrderData = {
        "items": [
            {"name": "example", "price": 12.49, "qty": 1},
            {"name": "example 2", "price": 12.30, "qty": 1}
        ],
        "total": 24.79
    };

    const [placeOrder, setPlaceOrder] = useState(false);
    const [orderResponse, setOrderResponse] = useState({});
    const [orderData, setOrderData] = useState(initOrderData);

    if (menuItems.foodItems === undefined) {
        return (
            <div>
            </div>
        );
    }

    return (
        <>
            <div className={showingMenuItems}>
                <div className="d-flex flex-wrap justify-content-start">
                    {menuItems.foodItems.map((foodItems, index) => {
                            return (
                                <div className="col-12 col-lg-2 px-1 my-1" key={index}>
                                    <FoodItem foodItems={foodItems}/>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
            <OrderButton setPlaceOrder={setPlaceOrder}/>
            <Modal placeOrder={placeOrder} setPlaceOrder={setPlaceOrder} orderResponse={orderResponse}/>
            <PostOrder placeOrder={placeOrder} setOrderResponse={setOrderResponse} orderData={orderData}/>
        </>
    );
}

export default Menu;
