import React from 'react';
import { PersonalInfo } from '../types/loan';
import { User, Mail, Phone, Calendar, Home, CreditCard } from 'lucide-react';

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo;
  updatePersonalInfo: (field: string, value: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  personalInfo,
  updatePersonalInfo,
  onNext,
  onPrev,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updatePersonalInfo(name, value);
  };

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const formatSSN = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format as XXX-XX-XXXX
    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 5) {
      return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    } else {
      return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5, 9)}`;
    }
  };

  const handleSSNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatSSN(e.target.value);
    updatePersonalInfo('socialSecurityNumber', formatted);
  };

  const isSSNValid = (ssn: string) => {
    const digits = ssn.replace(/\D/g, '');
    return digits.length === 9;
  };

  const isFormValid = () => {
    return (
      personalInfo.firstName.trim() !== '' &&
      personalInfo.lastName.trim() !== '' &&
      isEmailValid(personalInfo.email) &&
      personalInfo.phone.trim() !== '' &&
      personalInfo.dateOfBirth.trim() !== '' &&
      personalInfo.address.trim() !== '' &&
      personalInfo.city.trim() !== '' &&
      personalInfo.state.trim() !== '' &&
      personalInfo.zipCode.trim() !== '' &&
      isSSNValid(personalInfo.socialSecurityNumber)
    );
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="firstName"
              value={personalInfo.firstName}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800"
              placeholder="John"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="lastName"
              value={personalInfo.lastName}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800"
              placeholder="Doe"
              required
            />
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={handleChange}
            className={`block w-full pl-10 pr-3 py-2 border ${
              personalInfo.email && !isEmailValid(personalInfo.email)
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-blue-800 focus:border-blue-800'
            } rounded-md shadow-sm focus:outline-none`}
            placeholder="john.doe@example.com"
            required
          />
          {personalInfo.email && !isEmailValid(personalInfo.email) && (
            <p className="mt-1 text-sm text-red-500">Please enter a valid email address</p>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              name="phone"
              value={personalInfo.phone}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800"
              placeholder="(555) 123-4567"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              name="dateOfBirth"
              value={personalInfo.dateOfBirth}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800"
              required
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Social Security Number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <CreditCard className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="socialSecurityNumber"
            value={personalInfo.socialSecurityNumber}
            onChange={handleSSNChange}
            className={`block w-full pl-10 pr-3 py-2 border ${
              personalInfo.socialSecurityNumber && !isSSNValid(personalInfo.socialSecurityNumber)
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-blue-800 focus:border-blue-800'
            } rounded-md shadow-sm focus:outline-none`}
            placeholder="XXX-XX-XXXX"
            maxLength={11}
            required
          />
          {personalInfo.socialSecurityNumber && !isSSNValid(personalInfo.socialSecurityNumber) && (
            <p className="mt-1 text-sm text-red-500">Please enter a valid 9-digit Social Security Number</p>
          )}
        </div>
        <p className="mt-1 text-xs text-gray-500">
          Your SSN is required for identity verification and credit check purposes
        </p>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Street Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Home className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="address"
            value={personalInfo.address}
            onChange={handleChange}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800"
            placeholder="123 Main St"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            name="city"
            value={personalInfo.city}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800"
            placeholder="New York"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <input
            type="text"
            name="state"
            value={personalInfo.state}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800"
            placeholder="NY"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ZIP Code
          </label>
          <input
            type="text"
            name="zipCode"
            value={personalInfo.zipCode}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800"
            placeholder="10001"
            required
          />
        </div>
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="px-6 py-2 bg-gray-200 rounded-md text-gray-800 font-medium hover:bg-gray-300 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!isFormValid()}
          className={`px-6 py-2 rounded-md text-white font-medium transition-colors ${
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

export default PersonalInfoForm;