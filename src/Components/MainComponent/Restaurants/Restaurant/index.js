const Restaurant = ({item, setRestaurantID}) => {



    const restaurantClick = () => {
        let restaurantID = item.id;
        setRestaurantID(restaurantID);
    }

    return (
        <div className="text-center card border-1 border-info rounded-1 my-3">
            <button onClick={restaurantClick} className="btn info">
                <h2 className="card-title p-4 px-lg-3">{item.name}</h2>
            </button>
        </div>
    );
}

export default Restaurant;