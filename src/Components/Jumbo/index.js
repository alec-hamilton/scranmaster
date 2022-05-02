import jumboimg from './burgers.jpg';
import jumboimgmd from './burgers-md.jpg';

const Jumbo = () => {
  return (
  <div className="card border-0 p-0 bg-primary rounded-0 m-3">
    <div className="row m-0">
      <picture className="p-0">
        <source srcSet={jumboimgmd} media="(min-width: 768px)"/>
        <img src={jumboimg} className="card-img-top p-0" alt=""/>
      </picture>
      <div className={"card-img-overlay col-lg-5 col-11 h-50 m-auto bg-white bg-opacity-75 rounded-0 "}>
        <h1 className="card-title m-0 p-0 display-4 text-info text-center"><strong>Food. Delivered</strong></h1>
        <p className="card-text m-0 p-0 text-center">Order your favourite food from local restaurants, right to your door.</p>
      </div>
    </div>
  </div>
  )
}

export default Jumbo;
