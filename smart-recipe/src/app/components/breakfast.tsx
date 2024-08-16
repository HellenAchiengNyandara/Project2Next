'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Breakfast() {
  const [recipes, setRecipes] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [activeRecipe, setActiveRecipe] = useState(null); 

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
          category: recipe.dishTypes.includes('breakfast') ? 'Breakfast' : 'Other', // Adjust this logic based on your API
          ingredients: recipe.extendedIngredients.map(ing => ing.original),
        })).filter(recipe => recipe.category === 'Breakfast');

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

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>Error fetching recipes: {error}</p>; 

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {recipes.map((recipe) => (
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
    </div>
  );
}
