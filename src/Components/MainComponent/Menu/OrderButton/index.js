const OrderButton = ({setPlaceOrder}) => {

    const submitClick = (event) => {
        setPlaceOrder(true);
    }

    return (
        <button className="btn btn-success" data-bs-target="#myModal" data-bs-toggle="modal" onClick={submitClick}>
            Place Order
        </button>
    )
}

export default OrderButton;