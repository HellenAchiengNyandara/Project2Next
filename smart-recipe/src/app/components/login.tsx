import React from 'react';
import { Card } from "@/components/ui/card";
import Link from 'next/link';

export default function RegisterForm() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0E3B2A]">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-sm w-full">
          <div className='text-lg text-white semibold'><p><i>Find You favorite dish with Smarty</i></p></div>
          <Card className="shadow-lg rounded-lg p-6 bg-[#0E3B2A] border border-[#4A524F]">
            <form className="space-y-4">
              
              <input
                type="email"
                className="w-full p-4 rounded-lg bg-[#0E3B2A] text-white placeholder-gray-400 border border-[#4A524F] outline-none"
                placeholder="Email"
                required
              />
              <input
                type="password"
                className="w-full p-4 rounded-lg bg-[#0E3B2A] text-white placeholder-gray-400 border border-[#4A524F] outline-none"
                placeholder="Password"
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-[#0E3B2A] p-4 rounded-lg font-semibold hover:bg-gray-100 flex items-center justify-center"
              >
                Login
              </button>
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                Error message
              </div>
              
            </form>
          </Card>
        </div>
      </div>
      <div className="text-center text-white p-6">
        <p>
          Don't  have an account?{' '}
          <Link href="/register">
            <span className="text-blue-500 hover:underline cursor-pointer">
              Register
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
