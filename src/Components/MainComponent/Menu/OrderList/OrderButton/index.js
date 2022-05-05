import {isDisabled} from "@testing-library/user-event/dist/utils";

const OrderButton = ({setPlaceOrder, setOrderData, orderItems, total}) => {

let isDisabled = 'invisible';

    const submitClick = () => {

        setOrderData({
            "items": orderItems,
            "total": total,
        });
        setPlaceOrder(true);
    }

    if (orderItems.length != 0) {
        isDisabled = '';
    }
console.log(orderItems);
    return (
        <button className={"btn btn-success " + isDisabled}  data-bs-target="#myModal" data-bs-toggle="modal" onClick={submitClick}>
            Place Order
        </button>
    )
}

export default OrderButton;