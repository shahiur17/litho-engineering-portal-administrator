import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleLogin}
        className="card p-8 shadow-xl bg-base-100 w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="input input-bordered mb-4"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="btn btn-primary w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
