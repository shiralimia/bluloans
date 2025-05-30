export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface FinancialInfo {
  employmentStatus: 'employed' | 'self-employed' | 'unemployed' | 'retired';
  annualIncome: number;
  employerName: string;
  jobTitle: string;
  employmentLength: string;
}

export interface LoanDetails {
  amount: number;
  purpose: string;
  term: number; // months
}

export type FormStep = 'loan-details' | 'personal-info' | 'financial-info' | 'review' | 'confirmation';

export interface LoanApplication {
  personalInfo: PersonalInfo;
  financialInfo: FinancialInfo;
  loanDetails: LoanDetails;
  currentStep: FormStep;
  isSubmitted: boolean;
}