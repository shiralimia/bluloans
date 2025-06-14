import React from 'react';
import { FormStep } from '../types/loan';

interface ProgressBarProps {
  currentStep: FormStep;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const steps = [
    { id: 'loan-details', label: 'Loan Details' },
    { id: 'personal-info', label: 'Personal Info' },
    { id: 'financial-info', label: 'Financial Info' },
    { id: 'review', label: 'Review' },
  ];

  const getCurrentStepIndex = () => {
    if (currentStep === 'confirmation') return 4;
    return steps.findIndex(step => step.id === currentStep);
  };

  const currentStepIndex = getCurrentStepIndex();
  const progressPercentage = (currentStepIndex / (steps.length - 1)) * 100;

  return (
    <div className="mb-6 sm:mb-8">
      <div className="relative pt-1">
        <div className="flex items-center justify-between mb-2">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`flex-1 text-center ${index <= currentStepIndex ? 'text-blue-800' : 'text-gray-400'}`}
            >
              <span className="text-xs sm:text-sm">{step.label}</span>
            </div>
          ))}
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div 
            style={{ width: `${progressPercentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-800 transition-all duration-500 ease-in-out"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;