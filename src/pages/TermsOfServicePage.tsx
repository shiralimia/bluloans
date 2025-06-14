import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using LoanEase's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Loan Application Process</h2>
              <p className="text-gray-600 mb-4">
                All loan applications are subject to credit approval and verification of information provided. LoanEase reserves the right to approve or deny any loan application at its sole discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Processing Fee</h2>
              <p className="text-gray-600 mb-4">
                Upon loan approval, borrowers are required to pay a processing fee equivalent to 13.6% of the approved loan amount before funds are disbursed. This fee covers administrative costs, credit verification, and loan processing services.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Example:</strong> For a $10,000 approved loan, the processing fee would be $1,360, which must be paid before receiving the loan funds.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Eligibility Requirements</h2>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Must be at least 18 years of age</li>
                <li>Must be a U.S. resident</li>
                <li>Must have a valid government-issued ID</li>
                <li>Must have a regular source of income</li>
                <li>Must have an active bank account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Repayment Terms</h2>
              <p className="text-gray-600 mb-4">
                Loan repayment terms range from 12 to 60 months. Monthly payments are fixed and include principal and interest. Late payments may incur additional fees and affect your credit score.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Privacy and Data Protection</h2>
              <p className="text-gray-600 mb-4">
                Your personal and financial information is protected according to our Privacy Policy. We use industry-standard security measures to protect your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Communication Consent</h2>
              <p className="text-gray-600 mb-4">
                By submitting an application, you consent to receive communications from LoanEase via email, phone, or text message regarding your application and account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                LoanEase's liability is limited to the extent permitted by law. We are not responsible for any indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                LoanEase reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-600">
                Phone: (818) 806-9181<br />
                Email: support@loanease.com
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link 
              to="/apply" 
              className="text-blue-800 hover:underline"
            >
              ← Back to Application
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;