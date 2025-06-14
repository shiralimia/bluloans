import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const RatesPage: React.FC = () => {
  const loanTypes = [
    {
      type: 'Excellent Credit',
      apr: '5.99%',
      range: '$1,000 - $50,000',
      features: [
        'Lowest rates available',
        'Flexible terms up to 60 months',
        'No prepayment penalties',
        'Quick funding',
      ],
    },
    {
      type: 'Good Credit',
      apr: '8.99%',
      range: '$1,000 - $35,000',
      features: [
        'Competitive rates',
        'Terms up to 48 months',
        'No prepayment penalties',
        'Fast approval process',
      ],
    },
    {
      type: 'Fair Credit',
      apr: '12.99%',
      range: '$1,000 - $20,000',
      features: [
        'Accessible qualification requirements',
        'Terms up to 36 months',
        'No prepayment penalties',
        'Build credit history',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Transparent Rates & Terms
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            We offer competitive rates based on your credit profile. Check your rate with no impact to your credit score.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {loanTypes.map((loan) => (
            <div
              key={loan.type}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-4 sm:p-6 text-center border-b border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{loan.type}</h3>
                <div className="text-3xl sm:text-4xl font-bold text-blue-800 mb-2">
                  {loan.apr}
                </div>
                <p className="text-sm sm:text-base text-gray-600">Starting APR</p>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center mb-4 font-medium text-sm sm:text-base">
                  Loan amount: {loan.range}
                </p>
                <ul className="space-y-3">
                  {loan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 sm:p-6 bg-gray-50">
                <Link
                  to="/apply"
                  className="block w-full py-2 px-4 bg-blue-800 text-white text-center rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  Check Your Rate
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
            What Affects Your Rate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Credit Score</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Your credit score is one of the main factors that determines your interest rate. Higher scores typically qualify for lower rates.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Income</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Your income and debt-to-income ratio help us determine your ability to repay the loan.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Loan Term</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Longer loan terms may have higher interest rates but lower monthly payments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Loan Amount</h3>
              <p className="text-sm sm:text-base text-gray-600">
                The amount you borrow can affect your rate. Larger loans may qualify for better rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatesPage;