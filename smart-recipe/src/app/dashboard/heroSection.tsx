'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';  // Import Axios for making HTTP requests
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';

export default function Special() {
  const [recipes, setRecipes] = useState([]); // Initialize state to store recipes
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/random', {
          params: {
            number: 6, // Number of recipes to fetch
            apiKey: 'ed170d38b4b14efc9f38c6a631f9312a', // Replace with your actual API key
          },
        });

        const filteredRecipes = response.data.recipes.map(recipe => ({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          ingredients: recipe.extendedIngredients.map(ing => ing.original), // Extract ingredients
          instructions: recipe.instructions || 'No instructions available', // Extract instructions
        }));
        setRecipes(filteredRecipes);
        setLoading(false);

      } catch (err) {
        setError(err.message); // Set error state if request fails
        setLoading(false);
      }
    };

    fetchRecipes(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array means this useEffect runs once when component mounts

  if (loading) return <p>Loading recipes...</p>; // Display loading message while fetching data
  if (error) return <p>Error fetching recipes: {error}</p>; // Display error message if there's an error

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
              <CardTitle className="text-green-800">Breakfast</CardTitle>
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
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="shadow-md rounded-md bg-white">
            <CardHeader>
              <CardTitle>{recipe.title}</CardTitle>
              <CardDescription dangerouslySetInnerHTML={{ __html: recipe.summary }} />
            </CardHeader>
            <CardContent>
            <Image 
  src="https://img.spoonacular.com/recipes/658276-556x370.jpg" 
  alt="Recipe Image" 
  width={556} 
  height={370} 
  className="w-full h-auto object-cover" 
/>

              <div className="flex justify-between mt-3">
                <span>{recipe.readyInMinutes} min</span>
                <span>{recipe.difficulty ? recipe.difficulty : "N/A"}</span>
                <span>{recipe.calories ? recipe.calories : "N/A"} kcal</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* LOGOUT Button */}
      <div className='bg-red-500 py-2 flex-auto w-1/3 place-items-center mt-2 p-4'>
        <Link href="/">
          <button className="text-white">LOGOUT</button>
        </Link>
      </div>
    </div>
  );
}
