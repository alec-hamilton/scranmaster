import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Jumbo from "./Components/Jumbo";
import MainComponent from "./Components/MainComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from "react";

function App() {

    const [restaurantItems, setRestaurantItems] = useState([]);
    const jumboTitleInit = 'Food. Delivered.';
    const jumboTextInit = 'Order your favourite food from local restaurants, right to your door.';
    const [jumboTitle, setJumboTitle] = useState(jumboTitleInit);
    const [jumboText, setJumboText] = useState(jumboTextInit);
    const [showingRestaurants, setShowingRestaurants] = useState('visible');
    const [showingChangeButton, setShowingChangeButton] = useState('invisible');
    const [restaurantName, setRestaurantName] = useState('');



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

    const fetchData2 = async () => {
        const response = await fetch('http://localhost:8080/restaurants/1');

        if (!response.ok) {
            throw new Error('Data could not be fetched.')
        }

        return await response.json();
    }

    useEffect(() => {
            fetchData2()
                .then((restaurantData) => {
                    setRestaurantName(restaurantData.restaurant);
                    console.log(restaurantName)
                    // setJumboTitle(restaurantName);
                    // setJumboText('');
                })
                .catch((e) => {
                    console.log(e.message);
                })
        }, [restaurantName]
    );

    function handleButtonClick() {
        setJumboTitle(restaurantName);
        setJumboText('');
    }

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
            </div>
            <MainComponent restaurantItems={restaurantItems} />
            <button onClick={handleButtonClick}>Chipotle</button>
            <Footer/>
        </div>
    );
}

export default App;
