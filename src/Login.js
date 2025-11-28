// Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = () => {
    if (username === "admin@gmail.com" && password === "Admin@321") {
      navigate("/admin");
    } else {
      setErrorMsg("Invalid username or password!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-xl w-96 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-5">Login</h2>

        {errorMsg && <p className="text-red-600 text-center">{errorMsg}</p>}

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 border rounded-lg mb-4"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-900 text-white w-full py-3 rounded-lg"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/")}
          className="text-red-600 w-full mt-4"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
