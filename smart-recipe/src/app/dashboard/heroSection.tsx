'use client'; // Ensure this is at the top

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link'
import { MdFreeBreakfast } from "react-icons/md";

export default function Special() {
  const [recipes, setRecipes] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [activeRecipe, setActiveRecipe] = useState(null); 
  const [searchQuery, setSearchQuery] = useState(''); // State to track search query

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/random', {
          params: {
            number: 6,
            apiKey: 'ed170d38b4b14efc9f38c6a631f9312a', 
          },
        });

        const filteredRecipes = response.data.recipes.map(recipe => ({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          ingredients: recipe.extendedIngredients.map(ing => ing.original),
        }));
        setRecipes(filteredRecipes);
        setLoading(false);

      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []); 

  const toggleIngredients = (id) => {
    setActiveRecipe(activeRecipe === id ? null : id);
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>Error fetching recipes: {error}</p>; 

  return (
    <div className="p-5">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-green-800">Embark on Your Cooking Journey</h1>
      </div>
      <div className="relative mt-5 mb-5">
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
        />
        <button className="absolute top-0 right-0 p-3 bg-green-500 text-white rounded-r-md">
          Search
        </button>
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
        {filteredRecipes.map((recipe) => (
          <Card 
            key={recipe.id} 
            className="shadow-md rounded-md bg-white cursor-pointer"
            onClick={() => toggleIngredients(recipe.id)}
          >
            <CardHeader>
              <CardTitle>{recipe.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image 
                src={recipe.image} 
                alt={recipe.title} 
                width={500} 
                height={300} 
                className="w-full h-auto object-cover" 
              />
              {activeRecipe === recipe.id && (
                <div className="mt-3">
                  <h3 className="font-bold">Ingredients:</h3>
                  <ul className="list-disc list-inside">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className='bg-red-500 py-2 flex-auto w-1/3 place-items-center mt-2 p-4'>
        <Link href="/">
          <button className="text-white">LOGOUT</button>
        </Link>
      </div>
    </div>
  );
}
