import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you apply for a loan, create an account, or contact us for support.
              </p>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Personal Information:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Name, address, phone number, email address</li>
                <li>Date of birth and Social Security number</li>
                <li>Employment and income information</li>
                <li>Bank account information</li>
                <li>Credit and financial history</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Process and evaluate your loan application</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Communicate with you about your application and account</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and customer experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Credit bureaus and reporting agencies</li>
                <li>Service providers who assist with loan processing</li>
                <li>Legal authorities when required by law</li>
                <li>Third parties with your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement industry-standard security measures to protect your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Opt out of marketing communications</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to improve your experience on our website, analyze usage patterns, and provide personalized content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Third-Party Links</h2>
              <p className="text-gray-600 mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <p className="text-gray-600">
                Phone: (818) 806-9181<br />
                Email: privacy@loanease.com<br />
                Address: LoanEase Privacy Office, [Your Address]
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

export default PrivacyPolicyPage;