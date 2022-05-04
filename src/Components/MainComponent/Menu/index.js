import FoodItem from "./FoodItem";
import {useEffect, useState} from "react";

const Menu = ({menuItems, showingMenuItems}) => {

    const [orderItems, setOrderItems] = useState([]);

    const addToOrderItems = (orderItem) => {

        const filterItems = (item) => {
            return item.name === orderItem.name;
        }

        const index = orderItems.findIndex(filterItems);

        if (index === -1) {
            setOrderItems([...orderItems, orderItem]);
        } else {
            orderItems[index].quantity += 1;
            setOrderItems([...orderItems]);
        }
    }

    const subtractFromOrderItems = (orderItem) => {

        const filterItems = (item) => {
            return item.name === orderItem.name;
        }

        const index = orderItems.findIndex(filterItems);

        if (index !== -1) {
            orderItems[index].quantity -= 1;

            if (orderItems[index].quantity === 0) {
                orderItems.splice(index,1);
            }
            setOrderItems([...orderItems]);
        }
    }

    useEffect(() => {
        console.log(orderItems);
    }, [orderItems])

    if (menuItems.foodItems === undefined) {
        return (
            <div>
            </div>
        );
    }

    return (
        <div className={showingMenuItems} >
            <div className="d-flex flex-wrap justify-content-start">
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
        </div>
    );
}

export default Menu;
