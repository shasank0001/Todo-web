import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Sigin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    try {
      const response =await axios({
        method: "post",
        url: "http://localhost:3000/sigin",
        data: {
          username: username,
          password: password,
        },
      });
      const id = response.data.id;
      if (id === 1) {
        navigate("/login");
      } else {
        localStorage.setItem("id", id);
        navigate("/");
      }
    } catch (error) {
      console.error("Error during signin:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full max-w-xs"
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full max-w-xs"
      />
      <button
        onClick={handleSignin}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full max-w-xs"
      >
        sigin
      </button>
    </div>
  );
}
