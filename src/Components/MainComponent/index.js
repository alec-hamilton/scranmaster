import Restaurants from "./Restaurants";
import Menu from "./Menu";

const MainComponent = ({restaurantItems, setRestaurantID, menuItems, showingRestaurants, showingMenuItems}) => {

    return (
        <>
        <Restaurants className="container"
                     restaurantItems={restaurantItems}
                     setRestaurantID={setRestaurantID}
                     showingRestaurants={showingRestaurants}
        />
        <Menu menuItems={menuItems} showingMenuItems={showingMenuItems}/>
        </>
    );
}

export default MainComponent;