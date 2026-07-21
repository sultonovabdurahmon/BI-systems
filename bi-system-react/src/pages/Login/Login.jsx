import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Login to Account</h1>

        <p className="subtitle">
          Please enter your email and password to continue
        </p>

        <div className="form-group">
          <label>Email address:</label>

          <input
            type="email"
            placeholder="esteban_schiller@gmail.com"
          />
        </div>

        <div className="password-header">
          <label>Password</label>

          <span>Forget Password?</span>
        </div>

        <input
          type="password"
          placeholder="••••••"
        />

        <div className="checkbox">
          <input type="checkbox" />
          <span>Remember Password</span>
        </div>

        <button className="auth-btn">
          Sign In
        </button>

        <p className="bottom-text">
          Don't have an account?
          <Link to="/register">
            Create Account
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;