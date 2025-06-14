import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, BadgeCheck, TrendingUp } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-800 text-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
            Your Path to Financial Freedom Starts Here
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto px-2">
            Get the funds you need with competitive rates and flexible terms
          </p>
          <Link
            to="/apply"
            className="inline-block bg-white text-blue-800 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-50 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
            <div className="mb-3 sm:mb-4">
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-800" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Secure Process</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Your information is protected with bank-level security and encryption
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
            <div className="mb-3 sm:mb-4">
              <Clock className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-800" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Quick Decisions</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Get pre-qualified in minutes with no impact to your credit score
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
            <div className="mb-3 sm:mb-4">
              <BadgeCheck className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-800" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Competitive Rates</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Access low rates starting from 5.99% APR with flexible terms
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
            <div className="mb-3 sm:mb-4">
              <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-800" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Build Credit</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Improve your credit score with timely payments on your loan
            </p>
          </div>
        </div>

        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
            <div className="px-2">
              <div className="bg-blue-800 text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-base sm:text-lg md:text-xl font-bold">
                1
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Apply Online</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Complete our simple online application in minutes
              </p>
            </div>
            <div className="px-2">
              <div className="bg-blue-800 text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-base sm:text-lg md:text-xl font-bold">
                2
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Get Approved</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Receive a quick decision on your application
              </p>
            </div>
            <div className="px-2">
              <div className="bg-blue-800 text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-base sm:text-lg md:text-xl font-bold">
                3
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Get Funded</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Funds deposited directly to your bank account
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 sm:p-6 md:p-8 rounded-xl text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">Ready to Get Started?</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6">
            Take the first step towards your financial goals today
          </p>
          <Link
            to="/apply"
            className="inline-block bg-blue-800 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-700 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;