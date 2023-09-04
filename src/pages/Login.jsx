import React, { useRef } from 'react';

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignIn = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    console.log('Email:', email);
    console.log('Password:', password);

  };

  return (
    <>
      <div className='flex flex-wrap justify-center'>
        <div className='justify-start'>
         <h1 className='font-bold text-center w-8/12 items-center text-white text-2xl'>My Tinerary</h1>
        </div>
        <div className="bg-gray-200 flex flex-col items-center p-8 w-4/12 justify-end">
          <p className="mb-2">step 1 of 2</p>
          <p className="text-xl font-bold mb-4">Sign In</p>
          <p className="mb-2">
             New user?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Create an account
          </a>
          </p>
         <input
            type="email"
            placeholder="Email"
            className="border rounded-md p-2 mb-2 w-full"
            ref={emailRef}
         />
         <input
            type="password"
            placeholder="Password"
            className="border rounded-md p-2 mb-2 w-full"
            ref={passwordRef}
          />
          <button
            className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
            onClick={handleSignIn}
          >
          Continue
          </button>
          
          <p className="my-4">or</p>
          
          <button
            className="border border-gray-500 rounded-md py-2 px-4 w-full mb-2 hover:bg-blue-500 hover:text-white"
            onClick={handleSignIn}
          >
            Continue with Google
          </button>
          <button
            className="border border-gray-500 rounded-md py-2 px-4 w-full hover:bg-blue-500 hover:text-white"
          >
            Continue with Facebook
          </button>
        </div>
      </div>
    </>
  );
}