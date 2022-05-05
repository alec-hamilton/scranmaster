import FoodItem from "./FoodItem";
import {useEffect, useState} from "react";

const Menu = ({menuItems, showingMenuItems, filteredMenuItems, setFilteredMenuItems}) => {
    const [clickValue, setClickValue] = useState([]);

    // const [selectedButton, setSelectedButton] = useState('');

    useEffect(() => {
          console.log(menuItems);
      },
      [menuItems]);

    useEffect(() => {
          console.log(filteredMenuItems);
      },
      [filteredMenuItems]);

    // console.log(menuItems);
    let menu = menuItems.foodItems;
    let filteredMenu = filteredMenuItems.foodItems;


    if (menuItems.foodItems === undefined) {
        return (
            <div>
            </div>
        );
    }

    // const [showMenu, setShowMenu] = useState('');

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
    // console.log(foodTypeArray);

    let reducedFoodTypeArr = [];

    function handleFilterButton(event) {
        event.preventDefault();
        let filterValue = event.target.value;
        console.log(filterValue);
        console.log(clickValue);
        if (clickValue === filterValue) {
            // setSelectedButton(() => (
            //     'bg-light'
            // ));
            setFilteredMenuItems(()=>(menuItems));
            setClickValue(()=>([]));
            // console.log(selectedButton);
        } else {
            let filteredArray = menu.filter((foodObj, index) =>
              foodObj.foodType === filterValue);
            setFilteredMenuItems((prevState) => ({
                  restaurant: prevState.restaurant,
                  foodItems: filteredArray
              }
            ))
            // setSelectedButton(() => (
            //     'bg-info'
            // ));
            // console.log(selectedButton);
            setClickValue(()=>(filterValue));
        }
        // console.log(filteredMenuItems);



        // setShowMenu('d-none');


        // return menu = filteredArray;
        // console.log(menu);
        // console.log(menuItems.foodItems);
        // console.log(menuItems);
    }


    foodTypeArray.forEach((data, index) => {
        reducedFoodTypeArr.push(<button className="btn text-dark" onClick={handleFilterButton} value={data} key={index}>{data}</button>)
    })

    console.log(reducedFoodTypeArr);

    return (
        <div className={showingMenuItems}>
            <div className="row">
                <ul >
                    {reducedFoodTypeArr}
                </ul>
            </div>
            <div className="d-flex flex-wrap justify-content-start">
                {filteredMenu.map((foodItems, index) => {
                        return (
                            <div className="col-12 col-lg-2 px-1 my-1" key={index}>
                                <FoodItem foodItems={foodItems} />
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
}

export default Menu;
