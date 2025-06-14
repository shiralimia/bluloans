import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="py-3 md:py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 flex-shrink-0">
            <div className="flex-shrink-0">
              <img 
                src="/legacycapital640.jpg" 
                alt="Legacy Capital" 
                className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-lg object-cover"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 truncate">Legacy Capital</h1>
              <p className="text-xs md:text-sm text-gray-600 hidden sm:block">Your Financial Partner</p>
            </div>
          </Link>
          <nav className="flex-shrink-0">
            <ul className="flex space-x-2 sm:space-x-4 md:space-x-6 text-xs sm:text-sm md:text-base">
              <li>
                <Link 
                  to="/" 
                  className={`transition-colors whitespace-nowrap ${
                    location.pathname === '/' 
                      ? 'text-blue-800 font-medium' 
                      : 'text-gray-600 hover:text-blue-800'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/rates" 
                  className={`transition-colors whitespace-nowrap ${
                    location.pathname === '/rates' 
                      ? 'text-blue-800 font-medium' 
                      : 'text-gray-600 hover:text-blue-800'
                  }`}
                >
                  Rates
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className={`transition-colors whitespace-nowrap ${
                    location.pathname === '/faq' 
                      ? 'text-blue-800 font-medium' 
                      : 'text-gray-600 hover:text-blue-800'
                  }`}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/apply" 
                  className={`transition-colors whitespace-nowrap ${
                    location.pathname === '/apply' 
                      ? 'text-blue-800 font-medium' 
                      : 'text-gray-600 hover:text-blue-800'
                  }`}
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;