import React, { useState } from 'react';
import { LoanApplication } from '../types/loan';
import { CheckCircle, AlertCircle, Edit } from 'lucide-react';

interface ReviewApplicationProps {
  loanApplication: LoanApplication;
  calculateMonthlyPayment: () => number;
  onSubmit: () => void;
  onPrev: () => void;
  onEditSection: (section: 'loan-details' | 'personal-info' | 'financial-info') => void;
}

const ReviewApplication: React.FC<ReviewApplicationProps> = ({
  loanApplication,
  calculateMonthlyPayment,
  onSubmit,
  onPrev,
  onEditSection,
}) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { loanDetails, personalInfo, financialInfo } = loanApplication;
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const maskSSN = (ssn: string) => {
    if (ssn.length >= 4) {
      return `***-**-${ssn.slice(-4)}`;
    }
    return ssn;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const processingFee = Math.round(loanDetails.amount * 0.136);

  const handleSubmit = () => {
    if (termsAccepted) {
      onSubmit();
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Review Your Application</h2>
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">Loan Details</h3>
          <button 
            onClick={() => onEditSection('loan-details')} 
            className="text-blue-800 flex items-center hover:text-blue-600 transition-colors"
          >
            <Edit className="h-4 w-4 mr-1" />
            <span>Edit</span>
          </button>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Loan Amount</p>
              <p className="font-medium">{formatCurrency(loanDetails.amount)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Term</p>
              <p className="font-medium">{loanDetails.term} months</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Purpose</p>
              <p className="font-medium">{loanDetails.purpose}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Estimated Monthly Payment</p>
              <p className="font-medium">{formatCurrency(monthlyPayment)}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
          <button 
            onClick={() => onEditSection('personal-info')} 
            className="text-blue-800 flex items-center hover:text-blue-600 transition-colors"
          >
            <Edit className="h-4 w-4 mr-1" />
            <span>Edit</span>
          </button>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Full Name</p>
              <p className="font-medium">{personalInfo.firstName} {personalInfo.lastName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium">{personalInfo.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-medium">{personalInfo.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Date of Birth</p>
              <p className="font-medium">{personalInfo.dateOfBirth}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Social Security Number</p>
              <p className="font-medium">{maskSSN(personalInfo.socialSecurityNumber)}</p>
            </div>
            <div className="md:col-span-1">
              <p className="text-sm text-gray-600">Address</p>
              <p className="font-medium">
                {personalInfo.address}, {personalInfo.city}, {personalInfo.state} {personalInfo.zipCode}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">Financial Information</h3>
          <button 
            onClick={() => onEditSection('financial-info')} 
            className="text-blue-800 flex items-center hover:text-blue-600 transition-colors"
          >
            <Edit className="h-4 w-4 mr-1" />
            <span>Edit</span>
          </button>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Employment Status</p>
              <p className="font-medium capitalize">{financialInfo.employmentStatus.replace('-', ' ')}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Annual Income</p>
              <p className="font-medium">{formatCurrency(financialInfo.annualIncome)}</p>
            </div>
            {(financialInfo.employmentStatus === 'employed' || financialInfo.employmentStatus === 'self-employed') && (
              <>
                <div>
                  <p className="text-sm text-gray-600">Employer</p>
                  <p className="font-medium">{financialInfo.employerName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Job Title</p>
                  <p className="font-medium">{financialInfo.jobTitle}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Length of Employment</p>
                  <p className="font-medium">{financialInfo.employmentLength}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="mb-8 p-4 border border-blue-200 bg-blue-50 rounded-lg">
        <h4 className="text-sm font-medium text-blue-800 mb-2">Processing Fee Notice</h4>
        <p className="text-sm text-blue-600 mb-2">
          Upon loan approval, a processing fee of <strong>{formatCurrency(processingFee)}</strong> (13.6% of loan amount) 
          will be required before funds are disbursed. This fee covers administrative costs, credit verification, 
          and loan processing services.
        </p>
      </div>
      
      <div className="mb-8 p-4 border border-teal-200 bg-teal-50 rounded-lg flex items-start">
        <div className="mt-1 mr-3 flex-shrink-0">
          <CheckCircle className="h-5 w-5 text-teal-500" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-teal-800">Instant Pre-Qualification</h4>
          <p className="text-sm text-teal-600">
            Submitting this application will NOT affect your credit score. This is a soft credit check only.
          </p>
        </div>
      </div>
      
      <div className="mb-8 p-4 border border-yellow-200 bg-yellow-50 rounded-lg flex items-start">
        <div className="mt-1 mr-3 flex-shrink-0">
          <AlertCircle className="h-5 w-5 text-yellow-500" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-yellow-800">Important Notice</h4>
          <p className="text-sm text-yellow-600">
            By submitting this application, you confirm that all information provided is accurate and complete. 
            False information may result in loan denial or legal action.
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <label className="flex items-start cursor-pointer">
          <input 
            type="checkbox" 
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="mt-1 h-4 w-4 text-blue-800 focus:ring-blue-800 border-gray-300 rounded cursor-pointer" 
          />
          <span className="ml-2 text-sm text-gray-700">
            I agree to the <a href="/terms" target="_blank" className="text-blue-800 underline">Terms of Service</a> and 
            <a href="/privacy" target="_blank" className="text-blue-800 underline"> Privacy Policy</a>. I understand that 
            a processing fee of 13.6% of the approved loan amount is required before fund disbursement. I consent to receive 
            communications electronically and understand that LoanEase may contact me about my application.
          </span>
        </label>
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="px-6 py-2 bg-gray-200 rounded-md text-gray-800 font-medium hover:bg-gray-300 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={!termsAccepted}
          className={`px-6 py-2 rounded-md text-white font-medium transition-colors ${
            termsAccepted 
              ? 'bg-blue-800 hover:bg-blue-700' 
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default ReviewApplication;