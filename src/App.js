import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Jumbo from "./Components/Jumbo";
import MainComponent from "./Components/MainComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useEffect, useState} from "react";
import React from 'react';

function ModalDemo() {
    return (
        <div className="py-2">
            <button className="btn btn-dark" data-bs-target="#myModal" data-bs-toggle="modal">
                Show modal
            </button>
            <div className="modal" tabIndex="-1" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

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

            console.log(restaurantID);
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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime +1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);



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
            <ModalDemo />
    <Footer/>
</div>
)
    ;
}

export default App;
