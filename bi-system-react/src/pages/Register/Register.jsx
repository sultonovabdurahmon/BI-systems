import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Create an Account</h1>

        <p className="subtitle">
          Create a account to continue
        </p>

        <div className="form-group">
          <label>Email address:</label>

          <input
            type="email"
            placeholder="esteban_schiller@gmail.com"
          />
        </div>

        <div className="form-group">
          <label>Username</label>

          <input
            type="text"
            placeholder="Username"
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
          <span>I accept terms and conditions</span>
        </div>

        <button className="auth-btn">
          Sign Up
        </button>

        <p className="bottom-text">
          Already have an account?
          <Link to="/">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;