import jumboimg from './burgers.jpg';
import jumboimgmd from './burgers-md.jpg';

const Jumbo = ({jumboTitle, jumboText}) => {

    return (
        <div className="card border-0 p-0 bg-primary rounded-0">
            <div className="row m-0">
                <picture className="p-0">
                    <source srcSet={jumboimgmd}
                            media="(min-width: 768px)"/>
                    <img src={jumboimg} className="card-img-top p-0" alt=""/>
                </picture>
                <div
                    className={"card-img-overlay col-lg-6 col-10 h-50 m-auto bg-white bg-opacity-75 rounded-0"}>
                    <h1 className="card-text m-5 p-2 text-info"><strong>{jumboTitle}</strong></h1>
                    <h4 className="card-text m-0 p-0 ">{jumboText}</h4>
                </div>
            </div>
        </div>
    );
}

export default Jumbo;
