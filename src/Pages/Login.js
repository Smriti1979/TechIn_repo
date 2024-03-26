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
      <div className=" h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className='bg-white rounded-lg'>
        <div className='p-20'>
        <h1 className='text-5xl font-bold text-center'>LOGIN</h1>
          <div className='w-80'>
              <form className='flex flex-col mt-10'>
              <input
              type="text"
              placeholder="First Name"
              className="w-full py-2 px-4 mt-5 border border-gradient rounded-md focus:outline-none focus:border-black-500"
              />
              <input
              type="text"
              placeholder="Last Name"
              className="w-full py-2 px-4 mt-5 border border-gradient rounded-md focus:outline-none focus:border-black-500"
              />
              <input
              type="email"
              placeholder="Email"
              className="w-full py-2 px-4 mt-5 border border-gradient rounded-md focus:outline-none focus:border-black-500"
              />
              <input
              type="password"
              placeholder="Password"
              className="w-full py-2 px-4 mt-5 border border-gradient rounded-md focus:outline-none focus:border-black-500"
              />
              <input
              type="password"
              placeholder="Confirm Password"
              className="w-full py-2 px-4 mt-5 border border-gradient rounded-md focus:outline-none focus:border-black-500"
              />
              <button className='text-2xl text-white rounded-lg pt-2 pb-2 mt-10 font-bold bg-black'>LOGIN</button>
              </form>
              <div className='mt-10'>
                <h2>Don't have an account?</h2>
                <h2 className='text-blue-500 text-1xl bold'>CREATE ACCOUNT</h2>
              </div>
          </div>
        </div>   
        </div>
      </div>
    </div>
  );
};

export default Page2Content;