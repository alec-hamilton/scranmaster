import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Jumbo from './Components/Jumbo'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Jumbo />
      <Footer />
    </div>
  );
}

export default App;
