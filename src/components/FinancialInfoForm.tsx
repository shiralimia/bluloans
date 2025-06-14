import React from 'react';
import { FinancialInfo } from '../types/loan';
import { Briefcase, DollarSign, Building, Clock } from 'lucide-react';

interface FinancialInfoFormProps {
  financialInfo: FinancialInfo;
  updateFinancialInfo: (field: string, value: string | number) => void;
  onNext: () => void;
  onPrev: () => void;
}

const FinancialInfoForm: React.FC<FinancialInfoFormProps> = ({
  financialInfo,
  updateFinancialInfo,
  onNext,
  onPrev,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const processedValue = name === 'annualIncome' ? parseFloat(value) || 0 : value;
    updateFinancialInfo(name, processedValue);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const isEmployed = financialInfo.employmentStatus === 'employed' || financialInfo.employmentStatus === 'self-employed';

  const isFormValid = () => {
    if (financialInfo.employmentStatus === 'unemployed' || financialInfo.employmentStatus === 'retired') {
      return financialInfo.annualIncome > 0;
    }
    
    return (
      financialInfo.annualIncome > 0 &&
      financialInfo.employerName.trim() !== '' &&
      financialInfo.jobTitle.trim() !== '' &&
      financialInfo.employmentLength.trim() !== ''
    );
  };

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Financial Information</h2>
      
      <div className="mb-4 sm:mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Employment Status
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Briefcase className="h-5 w-5 text-gray-400 flex-shrink-0" />
          </div>
          <select
            name="employmentStatus"
            value={financialInfo.employmentStatus}
            onChange={handleChange}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800 appearance-none bg-white text-sm sm:text-base"
          >
            <option value="employed">Employed</option>
            <option value="self-employed">Self-Employed</option>
            <option value="unemployed">Unemployed</option>
            <option value="retired">Retired</option>
          </select>
        </div>
      </div>
      
      <div className="mb-4 sm:mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Annual Income
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <DollarSign className="h-5 w-5 text-gray-400 flex-shrink-0" />
          </div>
          <input
            type="number"
            name="annualIncome"
            value={financialInfo.annualIncome || ''}
            onChange={handleChange}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800 text-sm sm:text-base"
            placeholder="e.g. 60000"
            required
          />
        </div>
        {financialInfo.annualIncome > 0 && (
          <p className="mt-1 text-xs sm:text-sm text-gray-600">
            {formatCurrency(financialInfo.annualIncome)} per year
          </p>
        )}
      </div>
      
      {isEmployed && (
        <>
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Employer Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Building className="h-5 w-5 text-gray-400 flex-shrink-0" />
              </div>
              <input
                type="text"
                name="employerName"
                value={financialInfo.employerName}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800 text-sm sm:text-base"
                placeholder="Company name"
                required={isEmployed}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                value={financialInfo.jobTitle}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800 text-sm sm:text-base"
                placeholder="Your position"
                required={isEmployed}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Length of Employment
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Clock className="h-5 w-5 text-gray-400 flex-shrink-0" />
                </div>
                <select
                  name="employmentLength"
                  value={financialInfo.employmentLength}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800 appearance-none bg-white text-sm sm:text-base"
                  required={isEmployed}
                >
                  <option value="">Select time period</option>
                  <option value="< 1 year">Less than 1 year</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="> 10 years">More than 10 years</option>
                </select>
              </div>
            </div>
          </div>
        </>
      )}
      
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
        <button
          onClick={onPrev}
          className="px-4 sm:px-6 py-2 bg-gray-200 rounded-md text-gray-800 font-medium hover:bg-gray-300 transition-colors text-sm sm:text-base order-2 sm:order-1"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!isFormValid()}
          className={`px-4 sm:px-6 py-2 rounded-md text-white font-medium transition-colors text-sm sm:text-base order-1 sm:order-2 ${
            isFormValid() 
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

export default FinancialInfoForm;