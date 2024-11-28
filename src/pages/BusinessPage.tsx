import React from 'react';
import { ArrowLeft, Shield, Building2, CreditCard, BarChart, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BusinessPage() {
  const solutions = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: "Business Accounts",
      description: "Tailored account solutions for businesses of all sizes with competitive transaction fees."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      title: "Corporate Cards",
      description: "Issue and manage business cards with customizable spending limits and controls."
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-600" />,
      title: "Financial Analytics",
      description: "Real-time insights into your business finances with detailed reporting tools."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Payroll Solutions",
      description: "Streamline your payroll process with our integrated payroll management system."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Merchant Services",
      description: "Accept payments online and in-store with our secure payment processing solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-6 h-6 text-gray-600" />
                <span className="text-gray-600">Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Business Banking</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions to help your business grow and succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">For Small Businesses</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="bg-blue-100 p-1 rounded-full">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600">No monthly account fees for the first year</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-blue-100 p-1 rounded-full">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600">Free payment terminal for qualifying businesses</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-blue-100 p-1 rounded-full">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600">Dedicated small business support team</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">For Enterprises</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="bg-blue-100 p-1 rounded-full">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600">Customized banking solutions</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-blue-100 p-1 rounded-full">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600">International trade support</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-blue-100 p-1 rounded-full">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600">Dedicated relationship manager</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to grow your business?</h2>
            <p className="text-blue-100 mb-8">
              Let's discuss how we can help your business reach its full potential.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}