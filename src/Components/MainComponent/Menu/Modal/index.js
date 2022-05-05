import {useEffect, useState} from "react";

const Modal = ({placeOrder, setPlaceOrder, orderResponse}) => {

    const closeModal = () => {
        setTime(0);
    }

    const orderWait = orderResponse.prepTime + orderResponse.deliveryTime;
    const [time, setTime] = useState(0);
    let width = 0;
    const [timerId, setTimerId] = useState(0);
    let modalMessage = 'Your order is being prepared';
    let btnColor = 'btn-secondary';
    const [currentDate, setCurrentDate] = useState(new Date());
    const futureDate = new Date(currentDate.getTime() + orderWait * 1000)
    const deliveryHour = futureDate.getHours();
    let deliveryMins;

    if (futureDate.getMinutes() < 10) {
        deliveryMins = '0' + futureDate.getMinutes();
    } else {
        deliveryMins = futureDate.getMinutes();
    }

    const timer = () => {
        setTime((prevTime) => prevTime + 1);
    }

    useEffect(() => {
        if (placeOrder) {
            setCurrentDate(new Date());
            setTimerId(setInterval(timer, 1000));
        }
    }, [placeOrder]);

    useEffect(() => {
        if (time === orderWait) {
            setPlaceOrder(false);
            setTimerId(clearInterval(timerId))
        }
    }, [time]);

    if ((time / orderWait) * 100 < 25) {
        width = 25;
    } else if ((time / orderWait) * 100 < 50) {
        width = 50;
    } else if ((time / orderWait) * 100 < 75) {
        width = 75;
    } else if ((time / orderWait) * 100 < 100) {
        width = 100;
    } else {
        width = 100;
        modalMessage = 'Order Complete - Enjoy your meal!';
        btnColor = 'btn-danger'
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
                            <p>Estimated time of arrival <span
                                className="text-info">{deliveryHour + ':' + deliveryMins}</span></p>
                            <div className="progress">
                                <div className={"progress-bar progress-bar-striped progress-bar-animated w-" + width}
                                     role="progressbar" aria-valuenow="60"
                                     aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>{modalMessage}</p>
                        </div>
                        <div className="modal-footer p-0 m-1">
                            <button type="button" className={"btn btn-sm " + btnColor} data-bs-dismiss="modal"
                                    onClick={closeModal}>Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;