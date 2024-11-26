import { Shield, ChevronRight, Users, Building2 } from "lucide-react";

interface LandingPageProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export function LandingPage({ onLoginClick, onSignupClick }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <nav className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Shield className="w-8 h-8" />
                <span className="text-xl font-bold">SecureBank</span>
              </div>
              <button
                onClick={onLoginClick}
                className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
              >
                Sign In
              </button>
            </nav>
          </div>

          <div className="py-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Banking Made Secure
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Experience next-generation banking with state-of-the-art security
              and seamless transactions.
            </p>
            <button
              onClick={onSignupClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition inline-flex items-center"
            >
              Open Account <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
            <p className="text-gray-600">
              Multi-layer security with biometric authentication and real-time
              fraud detection.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">FICA Compliant</h3>
            <p className="text-gray-600">
              Full compliance with Financial Intelligence Centre Act for your
              peace of mind.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Digital Banking</h3>
            <p className="text-gray-600">
              Complete banking solutions at your fingertips with our secure
              digital platform.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust SecureBank for their
            banking needs. Open your account today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onSignupClick}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Open Account
            </button>
            <button
              onClick={onLoginClick}
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
