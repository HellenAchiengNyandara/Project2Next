import React from 'react';

export default function UserInfo() {
  return (
    <div className='grid place-items-center h-screen text-center'>
      <p>WE ARE WORKING ON THE RECIPE. WE WILL BE BACK SOON.</p>
      
      <div className='mt-2'>
        <img 
          src='/images/food1.jpeg' 
          alt='Food' 
          className='rounded-lg shadow-md w-50 h-21' 
        />
      </div>
      
      <div className='p-2 mt-4 bg-red-700 rounded-lg cursor-pointer'>
        <h1 className='text-white'>LOGOUT</h1>
      </div>
    </div>
  );
}
