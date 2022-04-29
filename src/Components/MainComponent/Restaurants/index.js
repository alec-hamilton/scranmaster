import {useEffect, useState} from "react";
import Restaurant from "./Restaurant";

const restaurantHardCode = [
    {
        "name": "Chipotle",
        "id": 1
    },
    {
        "name": "Panera",
        "id": 2
    },
    {
        "name": "Burger King",
        "id": 3
    },
    {
        "name": "Chipotle1",
        "id": 4
    },
    {
        "name": "Panera1",
        "id": 5
    },
    {
        "name": "Burger King1",
        "id": 6
    },
    {
        "name": "Chipotle2",
        "id": 7
    },
    {
        "name": "Panera2",
        "id": 8
    },

];

const Restaurants = () => {

    // const [restaurantItems, setRestaurantItems] = useState([]);
    //
    // const fetchData = async () => {
    //     const response = await fetch(restaurantHardCode);
    //
    //     if (!response.ok) {
    //         throw new Error('Data could not be fetched.')
    //     }
    //
    //     return await response.json();
    // }
    //
    // useEffect(() => {
    //     fetchData()
    //         .then((restaurantData) => {
    //             setRestaurantItems(restaurantData);
    //         })
    //         .catch((e) => {
    //             console.log(e.message);
    //         })
    // }, []
    //
    // );

    return (
        <div className="row">
            {restaurantHardCode.map((item, index) => {
                return (
                    <div className="col-12 col-lg-3" key={index}>
                        <Restaurant item={item} />
                    </div>
                );
            }

            )}
        </div>
    );
}

export default Restaurants;