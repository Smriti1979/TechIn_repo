import React from 'react';
import LoginImage from '../Components/LoginImage';

const Page2Content = () => {
  return (
    <div className="grid grid-cols-2">
      {/* Picture */}
      <div className="col-span-1 h-screen">
        <LoginImage/>
      </div>

      {/* Content Block */}
      <div className=" h-screen bg-black flex justify-center items-center">
        <div className='bg-white rounded-md px-60 pt-40 pb-40 rounded-lg'>
          <h1 className='text-4xl font-bold text-center'>Sign Up</h1>
          <div className='w-80'>
              <form className='flex flex-col mt-10'>
              <input
              type="text"
              placeholder="First Name"
              className="w-full py-2 px-4 border border-gradient rounded-md focus:outline-none focus:border-black-500"
              />
              <input
              type="text"
              placeholder="Last Name"
              className="w-full py-2 px-4 border border-gradient rounded-md focus:outline-none focus:border-black-500"
              />
              <input
              type="email"
              placeholder="Email"
              className="w-full py-2 px-4 border border-gradient rounded-md focus:outline-none focus:border-black-500"
              />
              <input
              type="password"
              placeholder="Passwor"
              className="w-full py-2 px-4 border border-gradient rounded-md focus:outline-none focus:border-black-500"
              />
              <input
              type="password"
              placeholder="Confirm Password"
              className="w-full py-2 px-4 border border-gradient rounded-md focus:outline-none focus:border-black-500"
              />
              <button className='text-white rounded-md p-2 mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Sign Up</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2Content;