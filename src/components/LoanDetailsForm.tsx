import React from 'react';
import { LoanDetails } from '../types/loan';
import { CreditCard, Calendar, HelpCircle } from 'lucide-react';

interface LoanDetailsFormProps {
  loanDetails: LoanDetails;
  updateLoanDetails: (field: string, value: string | number) => void;
  calculateMonthlyPayment: () => number;
  onNext: () => void;
}

const LoanDetailsForm: React.FC<LoanDetailsFormProps> = ({
  loanDetails,
  updateLoanDetails,
  calculateMonthlyPayment,
  onNext,
}) => {
  const loanPurposes = [
    'Debt Consolidation',
    'Home Improvement',
    'Major Purchase',
    'Medical Expenses',
    'Education',
    'Business',
    'Vacation',
    'Other',
  ];

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    updateLoanDetails('amount', isNaN(value) ? 0 : value);
  };

  const handleTermChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateLoanDetails('term', parseInt(e.target.value, 10));
  };

  const handlePurposeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateLoanDetails('purpose', e.target.value);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const monthlyPayment = calculateMonthlyPayment();

  const isFormValid = loanDetails.purpose && loanDetails.amount >= 1000 && loanDetails.amount <= 50000;

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Tell us about your loan</h2>
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          How much would you like to borrow?
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <CreditCard className="h-5 w-5 text-gray-400 flex-shrink-0" />
          </div>
          <input
            type="range"
            min="1000"
            max="50000"
            step="500"
            value={loanDetails.amount}
            onChange={handleAmountChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-800 mt-6"
          />
          <input
            type="number"
            value={loanDetails.amount}
            onChange={handleAmountChange}
            className="mt-2 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800"
            placeholder="Loan amount"
            min="1000"
            max="50000"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>$1,000</span>
          <span>$50,000</span>
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Loan term (months)
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400 flex-shrink-0" />
          </div>
          <select
            value={loanDetails.term}
            onChange={handleTermChange}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800 appearance-none bg-white"
          >
            <option value={12}>12 months (1 year)</option>
            <option value={24}>24 months (2 years)</option>
            <option value={36}>36 months (3 years)</option>
            <option value={48}>48 months (4 years)</option>
            <option value={60}>60 months (5 years)</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Purpose of loan
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <HelpCircle className="h-5 w-5 text-gray-400 flex-shrink-0" />
          </div>
          <select
            value={loanDetails.purpose}
            onChange={handlePurposeChange}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800 appearance-none bg-white"
          >
            <option value="">Select a purpose</option>
            {loanPurposes.map((purpose) => (
              <option key={purpose} value={purpose}>
                {purpose}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Estimated monthly payment</h3>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-blue-800">{formatCurrency(monthlyPayment)}</span>
          <span className="text-gray-600 ml-2">/ month</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Based on a {loanDetails.term}-month term at 5.99% APR
        </p>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={!isFormValid}
          className={`px-6 py-2 rounded-md text-white font-medium transition-colors ${
            isFormValid 
              ? 'bg-blue-800 hover:bg-blue-700' 
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LoanDetailsForm;