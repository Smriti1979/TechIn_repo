

function SignUp(){
    return (
            <div className='h-screen bg-gray-200 w-full flex justify-center items-center'>
                <div className='bg-white p-10 rounded-md px-32 pt-20 pb-40 rounded-lg'>
                    <div className='font-bold text-4xl'>
                        <h1>Sign Up</h1>
                    </div>
                    <form className='mt-20'>
                        <div className='flex justify-center mt-5'>
                            <div className='text-2xl '>
                                <label htmlFor="username">Username:</label>
                            </div>
                            <div className="Username-input">
                                <input className='border-2 rounded-md' type="text" id="username" name="username" />
                            </div>
                        </div>

                        <div className="flex justify-center  mt-5">
                            <div className="text-2xl">
                                <label htmlFor="email">Email:</label>
                            </div>
                            <div className="Email-input">
                                <input className='border-2 rounded-md' type="text" id="email" name="email" />
                            </div>
                        </div>

                        <div className="flex justify-center mt-5">
                            <div className="text-2xl ">
                                <label htmlFor="password">Password:</label>
                            </div>
                            <div className="Password-input">
                                <input className='border-2 rounded-md' type="password" id="password" name="password" />
                            </div>
                        </div>
                        
                        <div className="text-2xl mt-10">
                            <button className='btn' type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default SignUp;