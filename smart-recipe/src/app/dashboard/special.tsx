import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import food1 from '../../../public/images/food1.jpeg';
import Link from 'next/link'; 
import { MdFreeBreakfast } from "react-icons/md";
export default function Special() {
  return (
    <div className="p-5">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-green-800">Embark on Your Cooking Journey</h1>
        <div className="relative mt-5">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="absolute top-0 right-0 p-3 bg-green-500 text-white rounded-r-md">
            {/* You can replace this with an icon */}
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 mb-10">
        <Link href="/special" passHref>
          <Card className="shadow-md rounded-md bg-white text-center cursor-pointer">
            <CardHeader>
              <CardTitle className="text-green-800">Special</CardTitle>
            </CardHeader>
          </Card>
        </Link>   

        <Link href="/breakfast" passHref>
          <Card className="shadow-md rounded-md bg-white text-center cursor-pointer">
            <CardHeader>
              <CardTitle className="text-green-800"><MdFreeBreakfast />Breakfast</CardTitle>
            </CardHeader>
          </Card>
        </Link>

        <Card className="shadow-md rounded-md bg-white text-center">
          <CardHeader>
            <CardTitle className="text-green-800">Lunch</CardTitle>
          </CardHeader>
        </Card>
        <Card className="shadow-md rounded-md bg-white text-center">
          <CardHeader>
            <CardTitle className="text-green-800">Dinner</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
        <Card className="shadow-md rounded-md bg-white">
          <CardHeader>
            <CardTitle>Morning Pancakes</CardTitle>
            <CardDescription>Deep-fried ball of spiced with ground chickpeas or fava beans.</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src={food1} alt="Morning Pancakes" width={100} height={100} />
            <div className="flex justify-between mt-3">
              <span>1h</span>
              <span>Easy</span>
              <span>300 kcal</span>
            </div>
          </CardContent>
        </Card>

        
        
      </div>
      
      
      <div className='bg-red-500 py-2  flex-auto w-1/3 place-items-center mt-2 p-4'>
        <Link href="/login" passHref>
          <button className="text-white">LOGOUT</button>
        </Link>
      </div>
    
    </div>
  );
}
