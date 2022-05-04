import {useEffect, useState} from "react";

const Modal = ({timer}) => {

    const orderWait = 10;
    const [time, setTime] = useState(0);
    let width = 0;
    const deliveryTime = orderWait - time;


    useEffect(() => {
        if (timer) {
            const interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [timer]);

    if((time/orderWait)*100 < 25) {
        width = 25;
    }
    else if((time/orderWait)*100 < 50) {
        width = 50;
    }
    else if((time/orderWait)*100 < 75) {
        width = 75;
    }
    else {
        width = 100;
    }

    console.log(time);
    // console.log(`width: ${width}`);

    return (
        <div className="py-2">
            <div className="modal" tabIndex="-1" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thank You</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>The restaurant has received your order.</p>
                            <p>Estimated time of arrival <span className="text-info">{deliveryTime}</span></p>
                            <div className="progress">
                                <div className={"progress-bar progress-bar-striped progress-bar-animated w-" + width} role="progressbar" aria-valuenow="60"
                                     aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>Your order is being prepared</p>

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