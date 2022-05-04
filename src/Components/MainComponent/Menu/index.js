import FoodItem from "./FoodItem";

const Menu = ({menuItems, showingMenuItems}) => {

    if (menuItems.foodItems === undefined) {
        return (
            <div>
            </div>
        );
    }

    return (
        <div className={showingMenuItems} >
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
    );
}

export default Menu;
