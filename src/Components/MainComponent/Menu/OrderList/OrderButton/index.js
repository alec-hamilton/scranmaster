let disabled;

const OrderButton = ({setPlaceOrder, setOrderData, orderItems, total}) => {

    let isDisabled = {disabled};

    if (orderItems.length != 0) {
        disabled = '';
    }
    else {
        disabled = 'disabled'
    }

    const submitClick = () => {

        setOrderData({
            "items": orderItems,
            "total": total,
        });
        setPlaceOrder(true);
    }

    return (
        <button className="btn btn-success" {...isDisabled}
                data-bs-target="#myModal"
                data-bs-toggle="modal"
                onClick={submitClick}>
            Place Order
        </button>
    )
}

export default OrderButton;