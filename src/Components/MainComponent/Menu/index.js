import FoodItem from "./FoodItem";
import Modal from './Modal'
import PostOrder from "./PostOrder";
import {useEffect, useState} from "react";
import OrderList from "./OrderList";

const Menu = ({menuItems, showingMenuItems}) => {

    const [placeOrder, setPlaceOrder] = useState(false);
    const [orderResponse, setOrderResponse] = useState({});
    const [orderData, setOrderData] = useState({});
    const [orderItems, setOrderItems] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(subTotal + 2.49);
    }, [subTotal])

    const addToOrderItems = (orderItem) => {

        const filterItems = (item) => {
            return item.name === orderItem.name;
        }

        const index = orderItems.findIndex(filterItems);

        if (index === -1) {
            setOrderItems([...orderItems, orderItem]);
            let sum = subTotal;
            setSubTotal(sum += orderItem.price);
        } else {
            orderItems[index].qty += 1;
            setOrderItems([...orderItems]);
            let sum = subTotal;
            setSubTotal(sum += orderItem.price);
        }
    }

    const subtractFromOrderItems = (orderItem) => {

        const filterItems = (item) => {
            return item.name === orderItem.name;
        }

        const index = orderItems.findIndex(filterItems);

        if (index !== -1) {
            orderItems[index].qty -= 1;
            let sum = subTotal;
            setSubTotal(sum - orderItem.price);
            if (orderItems[index].qty === 0) {
                orderItems.splice(index, 1);
            }
            setOrderItems([...orderItems]);
        }
    }

    if (menuItems.foodItems === undefined) {
        return (
            <div>
            </div>
        );
    }

    return (
        <>
            <div className={showingMenuItems}>
                <div className="d-flex flex-column flex-lg-row ">
                    <div className="d-flex flex-wrap justify-content-start col-12 col-lg-10">
                        {menuItems.foodItems.map((foodItem, index) => {
                                return (
                                    <div className="col-12 col-lg-2 px-1 my-1 card-group" key={index}>
                                        <FoodItem foodItem={foodItem}
                                                  addToOrderItems={addToOrderItems}
                                                  orderItems={orderItems}
                                                  subtractFromOrderItems={subtractFromOrderItems}
                                        />
                                    </div>
                                );
                            }
                        )}
                    </div>
                    <OrderList className="col-lg-2 col-12"
                               orderItems={orderItems}
                               subTotal={subTotal}
                               total={total}
                               setPlaceOrder={setPlaceOrder}
                               setOrderData={setOrderData}
                    />
                </div>
                <Modal placeOrder={placeOrder} setPlaceOrder={setPlaceOrder} orderResponse={orderResponse}/>
                <PostOrder placeOrder={placeOrder}
                           setOrderResponse={setOrderResponse}
                           orderData={orderData}
                />
            </div>
        </>
    );
}

export default Menu;
