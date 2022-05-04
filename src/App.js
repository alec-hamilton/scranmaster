import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Jumbo from "./Components/Jumbo";
import MainComponent from "./Components/MainComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useEffect, useState} from "react";
import React from 'react';

function App() {

    const [restaurantItems, setRestaurantItems] = useState([]);
    const jumboTitleInit = 'Food. Delivered.';
    const jumboTextInit = 'Order your favourite food from local restaurants, right to your door.';
    const [jumboTitle, setJumboTitle] = useState(jumboTitleInit);
    const [jumboText, setJumboText] = useState(jumboTextInit);
    const [showingRestaurants, setShowingRestaurants] = useState('visible');
    const [showingChangeButton, setShowingChangeButton] = useState('invisible');


    const [restaurantID, setRestaurantID] = useState('');

    const [menuItems, setMenuitems] = useState([]);


    useEffect(() => {

            if (restaurantID === '') {
                return;
            }


            fetchMenu()
                .then((menuData) => {
                    setMenuitems(menuData);
                    setJumboTitle(menuData.restaurant);
                    setJumboText('');
                })
                .catch((e) => {
                    console.log(e.message);
                })

        },
        [restaurantID]
    );

    const fetchMenu = async () => {

        const response = await fetch('http://localhost:8080/restaurants/' + restaurantID);

        if (!response.ok) {
            throw new Error('Data could not be fetched.')
        }

        return await response.json();
    }


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
            <Header/>
            <div className="m-3">
                <Jumbo
                    jumboTitle={jumboTitle}
                    setJumboTitle={setJumboTitle}
                    jumboText={jumboText}
                    setJumboText={setJumboText}
                    showingRestaurants={showingRestaurants}
                />
                <MainComponent
                    restaurantItems={restaurantItems}
                    setRestaurantID={setRestaurantID}
                    menuItems={menuItems}
                />
            </div>
    <Footer/>
</div>
)
    ;
}

export default App;
