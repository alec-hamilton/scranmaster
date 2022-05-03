import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Jumbo from './Components/Jumbo'
import {useState} from "react";

const App = () => {

  const jumboHeaderHome = 'Food. Delivered.';
  const jumboTextHome = 'Order your favourite food from local restaurants, right to your door.'

  return (
    <div className="App">
      <Header />
      <Jumbo />
      <Footer />
    </div>
  );
}

export default App;
