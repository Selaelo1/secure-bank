import { ArrowLeft, Shield, Users, Building, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutPage() {
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About SecureBank
            </h1>
            <p className="text-xl text-gray-600">
              Building the future of banking, one secure transaction at a time.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2020, SecureBank was born from a vision to
                revolutionize the banking industry by combining cutting-edge
                technology with traditional banking values. We believe that
                banking should be secure, simple, and accessible to everyone.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">1M+ Users</h3>
                  <p className="text-gray-600">Trust us with their finances</p>
                </div>
                <div className="text-center">
                  <Building className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">50+ Branches</h3>
                  <p className="text-gray-600">Across South Africa</p>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Global Reach</h3>
                  <p className="text-gray-600">
                    International banking solutions
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To provide innovative, secure, and accessible banking solutions
                that empower individuals and businesses to achieve their
                financial goals. We're committed to:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>
                    Security: Protecting our customers' assets with
                    state-of-the-art technology
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>
                    Innovation: Continuously improving our digital banking
                    solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>
                    Community: Supporting local communities and promoting
                    financial literacy
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Leadership Team
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
                  <p className="text-blue-600">Chief Executive Officer</p>
                  <p className="text-gray-600 mt-2">
                    20+ years of experience in digital banking and fintech
                    innovation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Michael Chen</h3>
                  <p className="text-blue-600">Chief Technology Officer</p>
                  <p className="text-gray-600 mt-2">
                    Former head of cybersecurity at leading global tech
                    companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
