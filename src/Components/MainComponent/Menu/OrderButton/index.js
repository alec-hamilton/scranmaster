const OrderButton = ({setTimer}) => {

    const submitClick = (event) => {
        setTimer(true);
    }


    return (
        <button className="btn btn-dark" data-bs-target="#myModal" data-bs-toggle="modal" onClick={submitClick}>
            Place Order
        </button>
    )
}

export default OrderButton;