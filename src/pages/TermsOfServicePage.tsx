import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using BluLoans' services, you accept and agree to be bound by the terms and provisions of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Loan Application Process</h2>
              <p className="text-gray-600 mb-4">
                All loan applications are subject to credit approval and verification of information provided. BluLoans reserves the right to approve or deny any loan application at its sole discretion based on creditworthiness, income verification, and other underwriting criteria.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Applications are processed within 1-2 business days</li>
                <li>Additional documentation may be required for verification</li>
                <li>Pre-qualification does not guarantee final loan approval</li>
                <li>Interest rates and terms are subject to final underwriting approval</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Processing Fee</h2>
              <p className="text-gray-600 mb-4">
                Upon loan approval, borrowers are required to pay a processing fee equal to 13.6% of the approved loan amount before funds are disbursed. This fee covers:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Administrative costs and loan processing</li>
                <li>Credit verification and underwriting services</li>
                <li>Document preparation and legal compliance</li>
                <li>Risk assessment and fraud prevention measures</li>
              </ul>
              <p className="text-gray-600 mb-4">
                The processing fee is non-refundable once paid and loan funds are disbursed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Eligibility Requirements</h2>
              <p className="text-gray-600 mb-4">To qualify for a loan through BluLoans, you must meet the following criteria:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Be a legal resident of the United States</li>
                <li>Have a valid government-issued photo identification</li>
                <li>Have a regular source of verifiable income</li>
                <li>Have an active checking account in your name</li>
                <li>Provide a valid Social Security Number</li>
                <li>Meet minimum credit score requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Loan Terms and Repayment</h2>
              <p className="text-gray-600 mb-4">
                Loan repayment terms range from 12 to 60 months with fixed monthly payments. Interest rates range from 5.99% to 35.99% APR based on creditworthiness and other factors.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Monthly payments are automatically debited from your bank account</li>
                <li>Late payments incur fees and may affect your credit score</li>
                <li>Early repayment is allowed without prepayment penalties</li>
                <li>Missed payments may result in collection activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Interest Rates and Fees</h2>
              <p className="text-gray-600 mb-4">Interest rates and fees are determined based on:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Credit score and credit history</li>
                <li>Income and debt-to-income ratio</li>
                <li>Loan amount and term length</li>
                <li>Employment history and stability</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Additional fees may include late payment fees, returned payment fees, and collection costs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Privacy and Data Protection</h2>
              <p className="text-gray-600 mb-4">
                Your personal and financial information is protected according to our Privacy Policy. We use industry-standard security measures to protect your data and comply with all applicable privacy laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Communication Consent</h2>
              <p className="text-gray-600 mb-4">
                By submitting an application, you consent to receive communications from BluLoans via:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Email messages regarding your application and account</li>
                <li>Phone calls for verification and customer service</li>
                <li>Text messages for account updates and reminders</li>
                <li>Postal mail for official documents and notices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Default and Collections</h2>
              <p className="text-gray-600 mb-4">
                In the event of default, BluLoans may pursue collection activities including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Reporting to credit bureaus</li>
                <li>Engaging third-party collection agencies</li>
                <li>Legal action to recover outstanding amounts</li>
                <li>Asset seizure where legally permitted</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                BluLoans' liability is limited to the extent permitted by law. We are not responsible for any indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                BluLoans reserves the right to modify these terms at any time. Material changes will be communicated to borrowers via email or postal mail. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">12. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These terms are governed by the laws of the State of California and federal laws of the United States. Any disputes will be resolved through binding arbitration.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">13. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <a 
                  href="tel:818-806-9181"
                  className="flex items-center text-blue-800 hover:text-blue-600 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  (818) 806-9181
                </a>
                <a 
                  href="mailto:info@bluloans.com"
                  className="flex items-center text-blue-800 hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  info@bluloans.com
                </a>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link 
              to="/apply" 
              className="inline-flex items-center px-6 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
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