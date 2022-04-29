import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Jumbo from './Components/Jumbo'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="m-3">
      <Jumbo />
    </div>
      <Footer />
    </div>
  );
}

export default App;
