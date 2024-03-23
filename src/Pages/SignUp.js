import React from 'react';

const Page2Content = () => {
  return (
    <div className="grid grid-cols-2">
      {/* Picture */}
      <div className="col-span-1 h-screen">
        <img
          src="your-image-url.jpg"
          alt="Your Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Block */}
      <div className="col-span-1 h-screen bg-black flex justify-center items-center">
        <div className="bg-white p-16 rounded-lg">
          <h2 className="text-4xl font-bold text-black mb-8">LOG IN</h2>
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Username"
              className="w-full py-3 px-4 border border-gradient rounded-md focus:outline-none focus:border-blue-500"
            />
            <div className="absolute top-0 left-0 w-full h-full border-gradient border border-solid rounded-md pointer-events-none"></div>
          </div>
          <div className="relative mb-8">
            <input
              type="password"
              placeholder="Password"
              className="w-full py-3 px-4 border border-gradient rounded-md focus:outline-none focus:border-blue-500"
            />
            <div className="absolute top-0 left-0 w-full h-full border-gradient border border-solid rounded-md pointer-events-none"></div>
          </div>
          <div>
              <div className="flex items-center justify-between mb-8">
                <p className="text-gray-500">OR</p>
              </div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <img src="/google-icon.png" alt="Google" className="h-10 w-10" />
                  <img src="/twitter-icon.png" alt="Twitter" className="h-10 w-10" />
                  <img src="/facebook-icon.png" alt="Facebook" className="h-10 w-10" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2Content;