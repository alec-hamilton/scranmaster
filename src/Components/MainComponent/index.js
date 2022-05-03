import Restaurants from "./Restaurants";

const MainComponent = ({restaurantItems}) => {

    return (
        <Restaurants restaurantItems={restaurantItems}/>
    );
}

export default MainComponent;