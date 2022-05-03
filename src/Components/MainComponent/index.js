import Restaurants from "./Restaurants";
import Menu from "./Menu";

const MainComponent = ({restaurantItems, setRestaurantID, menuItems, restaurantID}) => {

    return (
        <>
        <Restaurants restaurantItems={restaurantItems} setRestaurantID={setRestaurantID} />
        <Menu menuItems={menuItems}/>
        </>
    );
}

export default MainComponent;