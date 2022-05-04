import {useEffect, useState} from "react";

const Modal = (props) => {

    const orderTime = 10;
    const [time, setTime] = useState(0);
    let width = 0;


    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime +1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if((time/orderTime)*100 < 25) {
        width = 25;
    }
    else if((time/orderTime)*100 < 50) {
        width = 50;
    }
    else if((time/orderTime)*100 < 75) {
        width = 75;
    }
    else {
        width = 100;
    }

    // console.log(time);
    // console.log(`width: ${width}`);

    return (
        <div className="py-2">
            <button className="btn btn-dark" data-bs-target="#myModal" data-bs-toggle="modal">
                Place Order
            </button>
            <div className="modal" tabIndex="-1" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thank You</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>The restaurant has received your order.</p>
                            <p>Estimated time of arrival <span className="text-info">15:47</span></p>
                            <div className="progress">
                                <div className={"progress-bar progress-bar-striped progress-bar-animated w-" + width} role="progressbar" aria-valuenow="60"
                                     aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>Your order is being prepated</p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;