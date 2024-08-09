import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
export default function HeroSection() {
  return (
    <div>
        <div className="grid grid-cols-1 gap-6 my-5 md:grid-cols-2 lg:grid-cols-4">
     <Card className="shadow-md rounded-md bg-white">
      <CardHeader>
        <CardTitle>Special</CardTitle>
      </CardHeader>
    </Card>
    <Card className="shadow-md rounded-md bg-white">
      <CardHeader>
        <CardTitle>Breakfast</CardTitle>
      </CardHeader>
    </Card>
    <Card className="shadow-md rounded-md bg-white">
      <CardHeader>
        <CardTitle>Lunch</CardTitle>
      </CardHeader>
    </Card>
    <Card className="shadow-md rounded-md bg-white">
      <CardHeader>
        <CardTitle>Dinner</CardTitle>
      </CardHeader>
    </Card>
    </div>
    <div className='col-span-4'>
    <Card className="shadow-md rounded-md bg-white">
        <CardTitle>Photo</CardTitle>
        <cardContent>Ingridients</cardContent>
      
    </Card>
    </div>
    </div>




    
  )
}
