import Restaurants from "./Restaurants";
import Menu from "./Menu";

const MainComponent = (
  {
      restaurantItems,
      setRestaurantID,
      menuItems,
      showingRestaurants,
      showingMenuItems,
      setMenuItems,
      filteredMenuItems,
      setFilteredMenuItems
  }
) => {

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
            filteredMenuItems={filteredMenuItems}
            setFilteredMenuItems={setFilteredMenuItems}
        />
        </>
    );
}

export default MainComponent;