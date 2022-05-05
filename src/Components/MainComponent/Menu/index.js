import FoodItem from "./FoodItem";
import {useEffect, useState} from "react";
import OrderList from "./OrderList";

const Menu = ({menuItems, showingMenuItems, filteredMenuItems, setFilteredMenuItems}) => {
    const [clickValue, setClickValue] = useState([]);

    useEffect(() => {
            console.log(menuItems);
        },
        [menuItems]);

    useEffect(() => {
            console.log(filteredMenuItems);
        },
        [filteredMenuItems]);

    let menu = menuItems.foodItems;
    let filteredMenu = filteredMenuItems.foodItems;

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

    let foodTypeArray = [];

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

    let reducedFoodTypeArr = [];

    function handleFilterButton(event) {
        event.preventDefault();
        let filterValue = event.target.value;
        console.log(filterValue);
        console.log(clickValue);
        if (clickValue === filterValue) {
            setFilteredMenuItems(() => (menuItems));
            setClickValue(() => ([]));
        } else {
            let filteredArray = menu.filter((foodObj, index) =>
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
        reducedFoodTypeArr.push(<button className="btn text-dark" onClick={handleFilterButton} value={data}
                                        key={index}>{data}</button>)
    })

    console.log(reducedFoodTypeArr);

    return (
        <div className={showingMenuItems}>
            <div className="row">
                <ul>
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
                <OrderList className="col-lg-2 col-12" orderItems={orderItems}/>
            </div>
        </div>
    );
}

export default Menu;
