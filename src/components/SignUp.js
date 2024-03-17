

function SignUp(){
    return (
        <div>
        <div className="SignUp-heading">
        <h1>Sign Up</h1>
        </div>
            <div className="Block">
            <form>
            <div className='display:flex'>
                <div className="Username">
                    <label htmlFor="username">Username:</label>
                </div>
                <div className="Username-input">
                    <input type="text" id="username" name="username" />
                </div>
            </div>
            <div className="Email-Block">
                <div className="Email">
                    <label htmlFor="email">Email:</label>
                </div>
                <div className="Email-input">
                    <input type="text" id="email" name="email" />
                </div>
            </div>
            <div className="Password-Block">
                <div className="Password">
                    <label htmlFor="password">Password:</label>
                </div>
                <div className="Password-input">
                    <input type="password" id="password" name="password" />
                </div>
            </div>
            <div className="submit-button">
                <button type="submit">Sign Up</button>
            </div>
            </form>
            </div>
        </div>
    );
}

export default SignUp;