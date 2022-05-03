import Restaurants from "./Restaurants";

const MainComponent = (props) => {

    const restaurantItems = props.restaurantItems;
    const showingRestaurants = props.showingRestaurants;

    return (
        <>
            <Restaurants showingRestaurants={showingRestaurants} restaurantItems={restaurantItems}/>
        </>
    );
}

export default MainComponent;