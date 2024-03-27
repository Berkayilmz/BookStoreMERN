import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">Book Store</Link>
        </h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Books</Link>
          <Link to="/books/details/all" className="hover:text-gray-300">Details</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
