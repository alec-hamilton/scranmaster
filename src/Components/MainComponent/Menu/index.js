import FoodItem from "./FoodItem";
import OrderButton from "./OrderButton"
import Modal from './Modal'
import {useState} from "react";


const Menu = ({menuItems}) => {
    const [timer, setTimer] = useState(false);

    if (menuItems.foodItems === undefined) {

        return (
            <div>
            </div>
        );

    }
console.log(`timer: ${timer}`);
    return (
        <>
            <div className="row">
                {menuItems.foodItems.map((foodItems, index) => {
                        return (
                            <div className="col-12 col-lg-3" key={index}>
                                <FoodItem foodItems={foodItems}/>
                            </div>)
                    }
                )
                }
            </div>
            <OrderButton setTimer={setTimer}/>
            <Modal timer={timer}/>
        </>
    );
}
    export default Menu;