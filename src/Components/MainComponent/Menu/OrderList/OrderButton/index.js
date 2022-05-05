const OrderButton = ({setPlaceOrder, setOrderData, orderItems, total}) => {

    const submitClick = () => {

        setOrderData({
            "items": orderItems,
            "total": total,
        });
        setPlaceOrder(true);
    }

    return (
        <button className="btn btn-success" data-bs-target="#myModal" data-bs-toggle="modal" onClick={submitClick}>
            Place Order
        </button>
    )
}

export default OrderButton;