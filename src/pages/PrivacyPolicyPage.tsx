import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
          
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
                <li>Full name, address, phone number, email address</li>
                <li>Date of birth and Social Security number</li>
                <li>Employment information and income details</li>
                <li>Bank account information and financial history</li>
                <li>Credit reports and credit scores</li>
                <li>Government-issued identification documents</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2">Automatically Collected Information:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>IP address and device information</li>
                <li>Browser type and operating system</li>
                <li>Website usage patterns and preferences</li>
                <li>Cookies and tracking technologies data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Process and evaluate your loan application</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Conduct credit checks and underwriting analysis</li>
                <li>Communicate with you about your application and account</li>
                <li>Service your loan and process payments</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and customer experience</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Detect and prevent fraudulent activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">We may share your information with:</p>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">Service Providers:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Credit bureaus and reporting agencies</li>
                <li>Payment processors and banking partners</li>
                <li>Identity verification services</li>
                <li>Customer service and support providers</li>
                <li>Legal and compliance consultants</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2">Legal Requirements:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Government agencies and regulators</li>
                <li>Law enforcement when required by law</li>
                <li>Courts and legal proceedings</li>
                <li>Fraud prevention and security purposes</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2">Business Transfers:</h3>
              <p className="text-gray-600 mb-4">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement comprehensive security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>256-bit SSL encryption for all data transmission</li>
                <li>Secure servers with advanced firewall protection</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication for account access</li>
                <li>Employee background checks and security training</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure document storage and disposal procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Your Privacy Rights</h2>
              <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data in a portable format</li>
                <li>Withdraw consent for certain data processing activities</li>
                <li>File complaints with regulatory authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website usage and performance</li>
                <li>Provide personalized content and advertisements</li>
                <li>Detect and prevent fraud</li>
                <li>Improve our services and user experience</li>
              </ul>
              <p className="text-gray-600 mb-4">
                You can control cookie settings through your browser preferences, though some features may not function properly if cookies are disabled.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Provide our services and maintain your account</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Prevent fraud and maintain security</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Loan records are typically retained for 7 years after account closure, as required by federal regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Third-Party Links and Services</h2>
              <p className="text-gray-600 mb-4">
                Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-600 mb-4">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">10. International Data Transfers</h2>
              <p className="text-gray-600 mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information during such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of material changes by:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Providing notice through our mobile application</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">12. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:818-806-9181"
                    className="flex items-center text-blue-800 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    (818) 806-9181
                  </a>
                  <a 
                    href="mailto:privacy@bluloans.com"
                    className="flex items-center text-blue-800 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    privacy@bluloans.com
                  </a>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p>BluLoans Privacy Officer</p>
                  <p>123 Financial District</p>
                  <p>Los Angeles, CA 90210</p>
                </div>
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

export default PrivacyPolicyPage;