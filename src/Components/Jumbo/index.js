import jumboimg from './burgers.jpg';
import jumboimgmd from './burgers-md.jpg';

const Jumbo = ({jumboTitle, jumboText, showingRestaurants}) => {
    let padding = 'p-3';
    if (showingRestaurants === 'invisible') {
        padding = 'p-5';
    }

    return (
        <div className="card border-0 p-0 bg-primary rounded-0">
            <div className="row m-0">
                <picture className="p-0">
                    <source srcSet={jumboimgmd}
                            media="(min-width: 768px)"/>
                    <img src={jumboimg} className="card-img-top p-0" alt=""/>
                </picture>
                <div
                    className={"card-img-overlay col-lg-6 col-10 h-50 m-auto bg-white bg-opacity-75 rounded-0" + padding}>
                    <h1 className="card-title m-0 p-0 display-4 text-info"><strong>{jumboTitle}</strong></h1>
                    <p className="card-text m-0 p-0">{jumboText}</p>
                </div>
            </div>
        </div>
    );
}

export default Jumbo;
