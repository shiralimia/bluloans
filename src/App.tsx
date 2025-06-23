import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLoanForm } from './hooks/useLoanForm';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import RatesPage from './pages/RatesPage';
import FAQPage from './pages/FAQPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ProgressBar from './components/ProgressBar';
import LoanDetailsForm from './components/LoanDetailsForm';
import PersonalInfoForm from './components/PersonalInfoForm';
import FinancialInfoForm from './components/FinancialInfoForm';
import ReviewApplication from './components/ReviewApplication';
import ConfirmationScreen from './components/ConfirmationScreen';

function App() {
  const {
    loanApplication,
    updatePersonalInfo,
    updateFinancialInfo,
    updateLoanDetails,
    nextStep,
    prevStep,
    submitApplication,
    calculateMonthlyPayment,
  } = useLoanForm();

  const { currentStep, personalInfo, financialInfo, loanDetails } = loanApplication;

  const renderStepContent = () => {
    switch (currentStep) {
      case 'loan-details':
        return (
          <LoanDetailsForm
            loanDetails={loanDetails}
            updateLoanDetails={updateLoanDetails}
            calculateMonthlyPayment={calculateMonthlyPayment}
            onNext={nextStep}
          />
        );
      case 'personal-info':
        return (
          <PersonalInfoForm
            personalInfo={personalInfo}
            updatePersonalInfo={updatePersonalInfo}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 'financial-info':
        return (
          <FinancialInfoForm
            financialInfo={financialInfo}
            updateFinancialInfo={updateFinancialInfo}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 'review':
        return (
          <ReviewApplication
            loanApplication={loanApplication}
            calculateMonthlyPayment={calculateMonthlyPayment}
            onSubmit={submitApplication}
            onPrev={prevStep}
            onEditSection={(section) => {
              setLoanApplication(prev => ({
                ...prev,
                currentStep: section
              }));
            }}
          />
        );
      case 'confirmation':
        return (
          <ConfirmationScreen
            applicationNumber={generateApplicationNumber()}
          />
        );
      default:
        return null;
    }
  };

  // Mock function to generate application reference number
  const generateApplicationNumber = () => {
    return `BL-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}-${new Date().getFullYear()}`;
  };

  // This is needed because onEditSection in ReviewApplication needs this function,
  // but it's not exposed by the hook directly
  const setLoanApplication = (
    updater: (prev: typeof loanApplication) => typeof loanApplication
  ) => {
    const updated = updater(loanApplication);
    if (updated.currentStep !== loanApplication.currentStep) {
      switch (updated.currentStep) {
        case 'loan-details':
        case 'personal-info':
        case 'financial-info':
          // We're using the hook's method to keep state consistent
          while (loanApplication.currentStep !== updated.currentStep) {
            prevStep();
          }
          break;
        default:
          break;
      }
    }
  };

  const renderApplicationContent = () => {
    return (
      <main className="container mx-auto px-4 py-6 sm:py-8 md:py-12 max-w-4xl">
        {currentStep !== 'confirmation' && (
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
              Apply for a Personal Loan
            </h1>
            <p className="text-center text-gray-600 text-sm sm:text-base px-4">
              Complete the form below to get pre-qualified with no impact to your credit score
            </p>
          </div>
        )}
        
        {currentStep !== 'confirmation' && <ProgressBar currentStep={currentStep} />}
        
        <div className="transition-all duration-500 ease-in-out">
          {renderStepContent()}
        </div>
      </main>
    );
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:info@bluloans.com';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rates" element={<RatesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/apply" element={renderApplicationContent()} />
      </Routes>
      
      <footer className="bg-white py-4 sm:py-6 mt-8 sm:mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600 text-xs sm:text-sm">
            <p>© 2025 BluLoans. All rights reserved.</p>
            <p className="mt-2 flex flex-wrap justify-center gap-2 sm:gap-4">
              <a href="/terms" className="text-blue-800 hover:underline">Terms of Service</a>
              <a href="/privacy" className="text-blue-800 hover:underline">Privacy Policy</a>
              <button 
                onClick={handleContactClick}
                className="text-blue-800 hover:underline cursor-pointer"
              >
                Contact Us
              </button>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;