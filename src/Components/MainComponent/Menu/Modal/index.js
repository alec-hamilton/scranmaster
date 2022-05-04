import {useEffect, useState} from "react";

const Modal = ({placeOrder, orderResponse}) => {

    const orderWait = orderResponse.prepTime + orderResponse.deliveryTime;
    const [time, setTime] = useState(0);
    let width = 0;

    const [currentDate, setCurrentDate] = useState(new Date());

    const futureDate = new Date(currentDate.getTime() + orderWait*1000)

    const deliveryHour = futureDate.getHours();
    let deliveryMins = 0;

    if(futureDate.getMinutes()<10) {
        deliveryMins = '0'+futureDate.getMinutes();
    }
    else {
        deliveryMins = futureDate.getMinutes();
    }


    useEffect(() => {
        if (placeOrder) {
            setCurrentDate(new Date());
            const interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);

            if(time === 0) {
                return () => clearInterval(interval);
            }
        }
    }, [placeOrder]);

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


    return (
        <div className="py-2">
            <div className="modal" tabIndex="-1" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header p-2">
                            <h6 className="modal-title"><strong>Thank You</strong></h6>
                        </div>
                        <div className="modal-body text-start px-1 py-0 m-0">
                            <p>The restaurant has received your order.</p>
                            <p>Estimated time of arrival <span className="text-info">{deliveryHour + ':' + deliveryMins}</span></p>
                            <div className="progress">
                                <div className={"progress-bar progress-bar-striped progress-bar-animated w-" + width} role="progressbar" aria-valuenow="60"
                                     aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>Your order is being prepared</p>
                        </div>
                        <div className="modal-footer p-0 m-1">
                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;