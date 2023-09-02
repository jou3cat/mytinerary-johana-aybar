import React, { useRef } from 'react';

export default function SignIn1() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignIn = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Aquí puedes realizar la lógica de inicio de sesión con los valores de email y contraseña
    console.log('Email:', email);
    console.log('Password:', password);

    // Por ejemplo, puedes enviar los datos al servidor para autenticar al usuario
  };

  return (
    <div className="flex flex-col items-center p-8">
      <p className="mb-2">step 1 of 2</p>
      <p className="text-xl font-bold mb-4">Sign In</p>
      <p className="mb-2">New user? Create an account</p>
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
      <button className="border rounded-md py-2 px-4 w-full mb-2">
        Continue with Google
      </button>
      <button className="border rounded-md py-2 px-4 w-full">
        Continue with Facebook
      </button>
    </div>
  );
}