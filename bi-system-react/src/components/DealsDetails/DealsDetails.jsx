import "./DealsDetails.css";
import appleWatch from "../../assets/images/apple-watch.svg";

function DealsDetails() {
  return (
    <div className="deals-card">

      {/* HEADER */}
      <div className="chart-header">
        <h2>Deals Details</h2>

        <select>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="deals-table">

        {/* TABLE HEADER */}
        <div className="table-head">
          <div>Product Name</div>
          <div>Location</div>
          <div>Date - Time</div>
          <div>Piece</div>
          <div>Amount</div>
          <div>Status</div>
        </div>

        <div className="table-row">

        <div className="product-cell">
          <img
            src={appleWatch}
            alt="Apple Watch"
          />

          <span>Apple Watch</span>
        </div>

          <div>6096 Marjolaine Landing</div>

          <div>12.09.2026 - 12.53 PM</div>

          <div>423</div>

          <div>$34,295</div>

          <div>
            <span className="status delivered">
              Delivered
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default DealsDetails;