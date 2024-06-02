import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <button
          onClick={async () => {
            try {
              const response = await axios({
                method: "post",
                url: "http://localhost:3000/login",
                data: {
                  username: username,
                  password: password,
                },
              });
              console.log(response.data)
              const id = response.data;
              if (id === 0) {
                navigate("/sigin");
              } else {
                localStorage.setItem("id", id);
                navigate("/");
              }
            } catch {
              console.log("something went wrong");
            }
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
}
