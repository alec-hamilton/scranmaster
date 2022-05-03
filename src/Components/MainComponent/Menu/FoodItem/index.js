const FoodItem = ({foodItems}) => {
    return (
        <div className="text-center card border-1 border-info rounded-1 my-3 h-100">
            <div className="btn info">
                <h2 className="card-title p-4 px-lg-3">{foodItems.foodName}</h2>
            </div>
        </div>
    );
}

export default FoodItem;