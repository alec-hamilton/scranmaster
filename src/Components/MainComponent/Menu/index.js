import FoodItem from "./FoodItem";
import Modal from './Modal'
import PostOrder from "./PostOrder";
import {useEffect, useState} from "react";
import OrderList from "./OrderList";
import './Menu.css';

const Menu = ({menuItems, showingMenuItems, filteredMenuItems, setFilteredMenuItems}) => {

    const [clickValue, setClickValue] = useState([]);
    const [placeOrder, setPlaceOrder] = useState(false);
    const [orderResponse, setOrderResponse] = useState({});
    const [orderData, setOrderData] = useState({});
    const [orderItems, setOrderItems] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(subTotal + 2.49);
    }, [subTotal])

    let menu = menuItems.foodItems;
    let filteredMenu = filteredMenuItems.foodItems;
    let foodTypeArray = [];
    let reducedFoodTypeArr = [];

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

    menuItems.foodItems.map((foodObj) => {
        if (foodObj.foodType === undefined) {
            foodObj.foodType = 'Other';
        } else if (foodObj["sideItem"] === true) {
            foodObj.foodType = 'Side';
        }
        if (!foodTypeArray.includes(foodObj.foodType)) {
            foodTypeArray.push(foodObj.foodType)
        }
        return foodTypeArray;
    })

    function handleFilterButton(event) {
        event.preventDefault();
        let filterValue = event.target.value;
        if (clickValue === filterValue) {
            setFilteredMenuItems(() => (menuItems));
            setClickValue(() => ([]));
        } else {
            let filteredArray = menu.filter((foodObj) =>
                foodObj.foodType === filterValue);
            setFilteredMenuItems((prevState) => ({
                    restaurant: prevState.restaurant,
                    foodItems: filteredArray
                }
            ))
            setClickValue(() => (filterValue));
        }
    }

    foodTypeArray.forEach((data, index) => {
        reducedFoodTypeArr.push(
            <li key={index} >
                <button className="btn btn-default border border-0" onClick={handleFilterButton} value={data}>{data}</button>
            </li>
        )
    })

    return (
        <div className={showingMenuItems}>
            <div id="dropdown" className="dropdown" >
                <button className="btn btn-secondary dropdown-toggle w-100 bg-info border border-info text-light my-3"
                        type="button"
                        id="dropdownMenu2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                    Categories
                </button>
                <ul className="dropdown-menu w-100 text-center" aria-labelledby="dropdownMenu2">
                    {reducedFoodTypeArr}
                </ul>
            </div>
            <div id="cat-row" className="row mt-2 ms-1">
                <ul className="list-group list-group-horizontal list-unstyled">
                    {reducedFoodTypeArr}
                </ul>
            </div>
            <div className="d-flex flex-column flex-lg-row ">
                <div className="d-flex flex-wrap justify-content-start col-12 col-lg-10">
                    {filteredMenu.map((foodItem, index) => {
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
                <Modal placeOrder={placeOrder}
                       setPlaceOrder={setPlaceOrder}
                       orderResponse={orderResponse}
                       setOrderData={setOrderData}
                       setOrderItems={setOrderItems}
                       setTotal={setTotal}
                       setSubTotal={setSubTotal}
                />
                <PostOrder placeOrder={placeOrder}
                           setOrderResponse={setOrderResponse}
                           orderData={orderData}
                />
            </div>
    );
}

export default Menu;
