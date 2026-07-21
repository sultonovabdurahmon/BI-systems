import watchImage from "../../assets/images/Bitmap.svg";

import "./Favorites.css";

const favorites = [
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
    title: "Air-Max-270",
    price: "$60.00",
    rating: 4,
    reviews: 34,
  },
  {
    id: 3,
    image: watchImage,
    title: "Beats Headphone",
    price: "$24.59",
    rating: 4,
    reviews: 34,
  },
  {
    id: 4,
    image: watchImage,
    title: "Amazfit Vip",
    price: "$99.00",
    rating: 4,
    reviews: 52,
  },
  {
    id: 5,
    image: watchImage,
    title: "Gumbo Mouse",
    price: "$18.20",
    rating: 4,
    reviews: 21,
  },
  {
    id: 6,
    image: watchImage,
    title: "Camera Tripod",
    price: "$35.00",
    rating: 4,
    reviews: 47,
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

function Favorites() {
  return (
    <div className="favorites-page">

      <h1 className="favorites-title">
        Favorites
      </h1>

      <div className="favorites-list">
        {favorites.map((product) => (
          <div className="favorite-card" key={product.id}>

            <div className="favorite-image-wrap">
              <button className="card-arrow card-arrow-left">‹</button>

              <img
                src={product.image}
                alt={product.title}
                className="favorite-image"
              />

              <button className="card-arrow card-arrow-right">›</button>
            </div>

            <div className="favorite-info">
              <div className="favorite-info-top">
                <div>
                  <h3 className="favorite-name">{product.title}</h3>
                  <p className="favorite-price">{product.price}</p>
                </div>

                <button className="favorite-heart-btn active">♥</button>
              </div>

              <div className="favorite-rating">
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

export default Favorites;