
const ProductList = ({ data }) => {
    return (
        <div className="product-list">
            {data.map((product) => (
                <div className="prod-preview" key={product.id}>
                    <div className="upper">
                        <div className="left">
                            <h1>{product.name}</h1>
                            <p>{product.desc}</p>
                        </div>
                        <div className="right">
                            <p>{product.code}
                            </p>
                        </div>
                    </div>
                    <div className="lower">
                        <h1>{product.lancerName}</h1>
                        <button className="blueButton">Buy Now</button>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default ProductList;