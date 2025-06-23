import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ConfirmationScreenProps {
  applicationNumber: string;
}

const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({ applicationNumber }) => {
  const navigate = useNavigate();

  const handleStartOver = () => {
    // Navigate to home page and refresh the page to reset all states
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg max-w-md mx-auto text-center transition-all duration-300">
      <div className="mb-4 sm:mb-6 flex justify-center">
        <div className="bg-green-100 p-3 sm:p-4 rounded-full">
          <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-600" />
        </div>
      </div>
      
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
        Application Submitted Successfully!
      </h2>
      
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
        Thank you for applying for a loan with BluLoans. Your application has been received and is now being processed.
      </p>
      
      <div className="bg-blue-50 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
        <p className="text-xs sm:text-sm text-gray-700 mb-2">Your Application Number:</p>
        <p className="text-lg sm:text-xl font-bold text-blue-800">{applicationNumber}</p>
      </div>
      
      <div className="mb-6 sm:mb-8">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Next Steps</h3>
        <ol className="text-left text-gray-600 space-y-2 text-sm sm:text-base">
          <li className="flex items-start">
            <span className="bg-blue-800 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5 flex-shrink-0">1</span>
            <span>We'll review your application within 1 business day.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-800 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5 flex-shrink-0">2</span>
            <span>You'll receive an email with your pre-qualification status.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-800 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5 flex-shrink-0">3</span>
            <span>If approved, we'll contact you to complete the final verification process.</span>
          </li>
        </ol>
      </div>
      
      <div className="border-t border-gray-200 pt-4 sm:pt-6">
        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
          Have questions about your application?
        </p>
        <div className="flex flex-col space-y-2">
          <button 
            onClick={handleStartOver}
            className="px-4 py-2 bg-blue-800 text-white rounded-md font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Start Over
          </button>
          <a 
            href="tel:818-806-9181" 
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md font-medium hover:bg-gray-300 transition-colors flex items-center justify-center text-sm sm:text-base"
          >
            Contact Support (818) 806-9181
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationScreen;