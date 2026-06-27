import { Link } from "react-router-dom";
import errorImage from "../../assets/images/404.svg";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="auth-page">
      <div className="auth-card notfound">

        <img
          src={errorImage}
          alt="404"
        />

        <h1>Looks like you've got lost....</h1>

        <Link to="/">
          <button className="auth-btn">
            Back to Dashboard
          </button>
        </Link>

      </div>
    </div>
  );
}

export default NotFound;