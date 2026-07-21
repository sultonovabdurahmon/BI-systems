import watchImage from "../../assets/images/Bitmap.svg";

import "./Products.css";

const products = [
  {
    id: 1,
    image: watchImage,
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviews: 131,
  },
  {
    id: 2,
    image: watchImage,
    title: "Girl Handy Beg",
    price: "$45.30",
    rating: 4,
    reviews: 34,
  },
  {
    id: 3,
    image: watchImage,
    title: "Beats Headphone",
    price: "$45.30",
    rating: 4,
    reviews: 34,
  },
];

function Stars({ rating }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
}

function Products() {
  return (
    <div className="product-page">

      <h1 className="product-title">
        Products
      </h1>

      <div className="product-banner">
        <button className="banner-arrow banner-arrow-left">‹</button>

        <div className="banner-content">
          <p className="banner-date">September 12-22</p>
          <h2 className="banner-heading">
            Enjoy free home
            <br />
            delivery in this summer
          </h2>
          <p className="banner-subtitle">
            Designer Dresses - Pick from trendy Designer Dress.
          </p>
          <button className="banner-btn">Get Started</button>
        </div>

        <button className="banner-arrow banner-arrow-right">›</button>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <div className="product-image-wrap">
              <button className="card-arrow card-arrow-left">‹</button>

              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />

              <button className="card-arrow card-arrow-right">›</button>
            </div>

            <div className="product-info">
              <div className="product-info-top">
                <div>
                  <h3 className="product-name">{product.title}</h3>
                  <p className="product-price">{product.price}</p>
                </div>

                <button className="favorite-btn">♡</button>
              </div>

              <div className="product-rating">
                <Stars rating={product.rating} />
                <span className="reviews-count">({product.reviews})</span>
              </div>

              <button className="edit-product-btn">Edit Product</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Products;