import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Phone } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How much can I borrow?',
      answer: 'You can borrow between $1,000 and $50,000, depending on factors such as your credit score, income, and current debt obligations. The exact amount you qualify for will be determined during the application process.',
    },
    {
      question: 'What are the requirements to apply?',
      answer: 'To apply for a loan, you must be at least 18 years old, have a valid government-issued ID, have a regular source of income, and be a U.S. resident. We\'ll also consider your credit score and debt-to-income ratio during the application process.',
    },
    {
      question: 'How long does it take to get approved?',
      answer: 'Most applications receive a decision within minutes. Once approved, funds can be deposited into your bank account as soon as the next business day after completing all necessary verification steps.',
    },
    {
      question: 'Will checking my rate affect my credit score?',
      answer: 'No, checking your rate won\'t affect your credit score. We use a soft credit pull for initial rate checks. A hard credit pull is only performed if you decide to proceed with a full application.',
    },
    {
      question: 'What can I use the loan for?',
      answer: 'Our personal loans can be used for various purposes, including debt consolidation, home improvements, major purchases, medical expenses, or unexpected costs. However, loans cannot be used for illegal activities or certain restricted purposes.',
    },
    {
      question: 'Are there any prepayment penalties?',
      answer: 'No, we never charge prepayment penalties. You\'re free to pay off your loan early or make additional payments at any time without incurring extra fees.',
    },
    {
      question: 'What are the repayment terms?',
      answer: 'We offer flexible repayment terms ranging from 12 to 60 months. Your specific terms will depend on factors such as loan amount, credit profile, and preferences. Monthly payments are fixed for the life of the loan.',
    },
    {
      question: 'How is my interest rate determined?',
      answer: 'Your interest rate is determined based on several factors, including your credit score, income, debt-to-income ratio, loan amount, and term length. Rates typically range from 5.99% to 35.99% APR.',
    },
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@legacycapital.group';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+18188069181';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600">
            Find answers to common questions about our personal loans
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-800" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-800" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you with any questions you may have
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleEmailClick}
              className="px-6 py-3 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Support
            </button>
            <button 
              onClick={handlePhoneClick}
              className="px-6 py-3 bg-white text-blue-800 border-2 border-blue-800 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (818) 806-9181
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;