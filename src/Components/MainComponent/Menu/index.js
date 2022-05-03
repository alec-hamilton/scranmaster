import FoodItem from "./FoodItem";

const Menu = ({menuItems}) => {

    if (menuItems.foodItems === undefined) {

        return (
            <div>
            </div>
        );

    }

    return (
        <div className="row">
            {menuItems.foodItems.map((foodItems, index) => {
                    return (
                        <div className="col-12 col-lg-3" key={index}>
                            <FoodItem foodItems={foodItems}/>
                        </div>
                    );
                }
            )}
        </div>
    );

}

export default Menu;