const FoodItem = ({foodItems}) => {

    let side = '';

    if (foodItems.sideItem === true) {
        side = 'side';
    }

    return (
        <div className="text-start card shadow border-1 border-dark rounded-1 my-3 h-100">
            <div className="p-lg-2">
                <p className="fs-6 card-title fw-bold">{foodItems.foodName}</p>
                <p className="badge bg-success me-1">Calories: {foodItems.calories}</p>
                <p className="badge bg-primary me-1 ">{foodItems.foodType}</p>
                <p className="badge bg-warning me-1">{side}</p>
                <p className="fs-6 py-1 my-0 fw-bold">£{foodItems.price.toFixed(2)}</p>

            </div>
        </div>
    );
}

export default FoodItem;