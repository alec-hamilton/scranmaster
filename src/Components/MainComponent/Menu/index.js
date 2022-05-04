import FoodItem from "./FoodItem";
import {useEffect, useState} from "react";

const Menu = ({menuItems, showingMenuItems, setMenuItems, showingEachItem, setShowingEachItem}) => {

    useEffect(() => {
            console.log(menuItems);
        },
        [menuItems]);

    if (menuItems.foodItems === undefined) {
        return (
            <div>
            </div>
        );
    }

    let menu = menuItems.foodItems; // array of objects

    const [showMenu, setShowMenu] = useState('');

    let foodTypeArray = [];

    menu.map((foodObj) => {
        if (foodObj.foodType === undefined) {
            foodObj.foodType = 'Other';
        }
        if (!foodTypeArray.includes(foodObj.foodType)) {
            foodTypeArray.push(foodObj.foodType)
            console.log(foodTypeArray);
        }
    })

    let filteredFood = [];

    function handleFilterButton(event) {
        event.preventDefault();

        let filterValue = event.target.value;
        console.log(filterValue);
        let filteredArray = menu.filter((foodObj, index) =>
            foodObj.foodType === filterValue)
        console.log(filteredArray);
        console.log(menu);

        // setMenuItems(prevState => ({
        //     restaurant: prevState.restaurant,
        //     foodItems: filteredArray
        // }))

        setShowMenu('d-none');


        menu = filteredArray;
        console.log(menu);
    }


    foodTypeArray.forEach((data) => {
        filteredFood.push(<button onClick={handleFilterButton} value={data}>{data}</button>)
    })

    return (
        <div className={menuItems}>
            <div className="row">
                <ul>
                    {filteredFood}
                </ul>
            </div>
            <div className={showingMenuItems}>
                <div className="d-flex flex-wrap justify-content-start">
                    {menu.map((foodItems, index) => {
                            return (
                                <div className="col-12 col-lg-2 px-1 my-1" key={index}>
                                    <FoodItem showingEachItem={showingEachItem} foodItems={foodItems} />
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
}

export default Menu;
