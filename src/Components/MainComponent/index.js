import Restaurants from "./Restaurants";
import Menu from "./Menu";

const MainComponent = ({restaurantItems, setRestaurantID, menuItems, showingRestaurants, showingMenuItems, setMenuItems, showingEachItem, setShowingEachItem}) => {

    return (
        <>
        <Restaurants
            className="container"
            restaurantItems={restaurantItems}
            setRestaurantID={setRestaurantID}
            showingRestaurants={showingRestaurants}
        />
        <Menu
            menuItems={menuItems}
            showingMenuItems={showingMenuItems}
            setMenuItems={setMenuItems}
            showingEachItem={showingEachItem}
            setShowingEachItem={setShowingEachItem}
        />
        </>
    );
}

export default MainComponent;