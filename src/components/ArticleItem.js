function ArticleItem() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="http://satyr.io/200/1" alt="image 1" />
            <div className="card-body">
                <h5 className="card-title">Item</h5>
                <p className="card-text">Item description is here but it's a short one.</p>
                <span>10$</span>
                <a href="#" className="btn btn-primary">
                    Add to cart
                </a>
            </div>
        </div>
    );
}

export default ArticleItem;
