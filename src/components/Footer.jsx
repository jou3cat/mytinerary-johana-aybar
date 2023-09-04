import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 fixed bottom-0">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; 2023 MyTineraries, Inc.</p>
          <div className="flex flex-wrap justify-center">
            <p className="mr-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacidad</a></p>
            <p className="mr-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Términos</a></p>
            <p className="mr-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Mapa del sitio</a></p>
          </div>
      </div>
    </footer>
  );
}
