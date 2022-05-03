import './App.css';
import MainComponent from "./Components/MainComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";

function App() {

    const [restaurantItems, setRestaurantItems] = useState([]);

    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/restaurants');

        if (!response.ok) {
            throw new Error('Data could not be fetched.')
        }

        return await response.json();
    }

    useEffect(() => {
            fetchData()
                .then((restaurantData) => {
                    setRestaurantItems(restaurantData);
                })
                .catch((e) => {
                    console.log(e.message);
                })
        }, []

    );

  return (
    <div className="App">
      <MainComponent restaurantItems={restaurantItems}/>
    </div>
  );
}

export default App;
