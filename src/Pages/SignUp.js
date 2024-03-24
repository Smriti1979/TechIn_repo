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
      <div className="col-span-1 h-screen bg-black flex justify-center items-center">
        <div className='bg-white p-20 rounded-md px-64 pt-40 pb-60 rounded-lg'>
          <h1 className='text-4xl font-bold text-center'>Sign Up</h1>
          <form className='flex flex-col mt-10'>
            <input className='border-b-2 border-black mb-5' type='text' placeholder='First Name'></input>
            <input className='border-b-2 border-black mb-5' type='text' placeholder='Last Name'></input>
            <input className='border-b-2 border-black mb-5' type='email' placeholder='Email'></input>
            <input className='border-b-2 border-black mb-5' type='password' placeholder='Password'></input>
            <input className='border-b-2 border-black mb-5' type='password' placeholder='Confirm Password'></input>
            <button className='bg-black text-white rounded-md p-2 mt-5'>Sign Up</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Page2Content;