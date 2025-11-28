// Homepage.js
import "./App.css";
import logo from "./logo/logo.png";
import Workman from "./logo/working.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  // Load menu items from LocalStorage
  const menuItems =
    JSON.parse(localStorage.getItem("menuItems")) || [
      { name: "Website", link: "https://izml.gov.np/" },
      { name: "Account", link: "https://izml.gov.np/" },
      { name: "Attendance", link: "http://103.180.240.11:8008/" },
      { name: "Payroll", link: "https://izml.gov.np/" },
      { name: "PIMS", link: "https://izml.gov.np/" },
      { name: "Billing", link: "https://izml.gov.np/" },
      { name: "Meter Reading", link: "https://izml.gov.np/" },
    ];

  // Login popup state
  const [showLogin, setShowLogin] = useState(false);
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
    <div className="App">
      {/* Header */}
      <nav className="bg-blue-900 p-8 text-white h-32 flex justify-between items-center">
        <div className="flex">
          <div className="h-24 w-24 p-0">
            <img src={logo} alt="Logo" />
          </div>

          <div className="ml-4 pt-4 text-left">
            <h3 className="text-base">नेपाल सरकारको स्वामित्व भएको</h3>
            <h2 className="text-xl font-bold">औद्योगिक क्षेत्र व्यवस्थापन लिमिटेड</h2>
            <h3 className="text-base">बालाजु, काठमाण्डौ, नेपाल</h3>
          </div>
        </div>

        <button
          onClick={() => setShowLogin(true)}
          className="bg-yellow-400 px-6 py-2 rounded-lg text-black"
        >
          Login
        </button>
      </nav>

      {/* Title */}
      <div className="bg-gray-100 p-4">
        <h2 className="font-bold text-2xl text-left">
          Welcome to The Office Management Portal
        </h2>
      </div>

      {/* Main Section */}
      <div className="min-h-full bg-gradient-to-b from-sky-800 to-purple-500 p-8 text-white grid grid-cols-3">
        <div>
          <img src={Workman} alt="Workman" />
        </div>

        <div className="col-span-2 grid grid-cols-1 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => window.open(item.link, "_blank")}
                className="flex items-center w-full h-20 gap-4 bg-lime-800 hover:bg-gradient-to-b from-green-800 to-purple-500 text-white rounded-2xl p-4 text-lg font-medium shadow-lg transition"
              >
                <span className="bg-cyan-300 w-12 h-12 rounded-full"></span>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* LOGIN POPUP */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="bg-white w-96 p-8 rounded-xl shadow-xl text-black">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

            {errorMsg && (
              <p className="text-red-600 text-center mb-2">{errorMsg}</p>
            )}

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
              className="w-full bg-blue-900 p-3 text-white rounded-lg"
            >
              Login
            </button>

            <button
              onClick={() => setShowLogin(false)}
              className="w-full mt-4 text-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
