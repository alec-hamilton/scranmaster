import Restaurants from "./Restaurants";
import Menu from "./Menu";

const MainComponent = ({restaurantItems, setRestaurantID, menuItems}) => {

    return (
        <>
        <Restaurants className="container" restaurantItems={restaurantItems} setRestaurantID={setRestaurantID} />
        <Menu menuItems={menuItems}/>
        </>
    );
}

export default MainComponent;