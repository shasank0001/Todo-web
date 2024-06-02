import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Header() {
    const navigate = useNavigate();
    return (
        <div className="bg-gradient-to-r from-blue-400 to-purple-600 text-white p-5 font-bold text-4xl shadow-lg rounded-b-lg relative">
            My Todos
            <div className="absolute top-0 right-0 mt-4 mr-4 space-x-2">
                <button 
                    onClick={() => navigate("/login")} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Login
                </button>
                <button 
                    onClick={() => navigate("/sigin")} 
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Sign In
                </button>
            </div>
        </div>
    );
}
