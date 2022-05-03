import Restaurant from "./Restaurant";

const Restaurants = ({restaurantItems, setRestaurantID}) => {

    return (
        <div className="row">
            {restaurantItems.map((item, index) => {
                    return (
                        <div className="col-12 col-lg-3" key={index}>
                            <Restaurant item={item} setRestaurantID={setRestaurantID}/>
                        </div>
                    );
                }
            )}
        </div>
    );
}

export default Restaurants;