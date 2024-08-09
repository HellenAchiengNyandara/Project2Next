"use client";

import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import Link from 'next/link';

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        setError(""); 
      } else {
        setError("User registration failed");
      }
    } catch (error) {
      setError("An error occurred while registering");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0E3B2A]">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-sm w-full">
          <div className="text-center mb-8">
            <h1 className="text-white text-2xl font-semibold">
              Create an Account
            </h1>
          </div>
          <Card className="shadow-lg rounded-lg p-6 bg-[#0E3B2A] border border-[#4A524F]">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 rounded-lg bg-[#0E3B2A] text-white placeholder-gray-400 border border-[#4A524F] outline-none"
                placeholder="Name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-lg bg-[#0E3B2A] text-white placeholder-gray-400 border border-[#4A524F] outline-none"
                placeholder="Email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 rounded-lg bg-[#0E3B2A] text-white placeholder-gray-400 border border-[#4A524F] outline-none"
                placeholder="Password"
              />
              <button
                type="submit"
                className="w-full bg-white text-[#0E3B2A] p-4 rounded-lg font-semibold hover:bg-gray-100 flex items-center justify-center"
              >
                Register
              </button>
              {error && (
                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                  {error}
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
      <div className="text-center text-white p-6">
        <p>
          Already have an account?{' '}
          <Link href="/">
            <span className="text-blue-500 hover:underline cursor-pointer">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
