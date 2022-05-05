import './styles.css';

const OrderList = ({orderItems, subTotal, total}) => {
    return (
        <div className="w-100 mt-3 border-0 bg-light text-start custom-position ms-lg-1">
            <div className="card-body">
                <p className="card-title border-0 bg-light text-start fw-bold text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg> Order
                </p>
                <div className="list-group list-unstyled">
                    {orderItems.map((orderItem) => (
                        <li className="d-flex justify-content-between py-2" key={orderItem.name}>{orderItem.name}
                            <div className="badge bg-primary rounded-pill">{orderItem.quantity}</div>
                        </li>
                    ))}
                </div>
                <div className="d-flex justify-content-between mt-4 mb-0">
                    <p className="mb-1">Sub Total</p>
                    <p className="mb-1">£{subTotal.toFixed(2)}</p>
                </div>
                <div className="d-flex justify-content-between mb-0">
                    <p className="mb-1">Delivery Fee</p>
                    <p className="mb-1">£0.99</p>
                </div>
                <div className="d-flex justify-content-between mb-0">
                    <p className="mb-1">Service Fee</p>
                    <p className="mb-1">£1.50</p>
                </div>
                <div className="d-flex justify-content-between mb-0">
                    <p className="fw-bold">Total</p>
                    <p className="fw-bold">£{total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}

export default OrderList