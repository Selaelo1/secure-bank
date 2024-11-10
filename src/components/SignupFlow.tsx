import React, { useState } from "react";
import { Shield, Upload, CheckCircle } from "lucide-react";

interface SignupFlowProps {
  onComplete: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  idNumber: string;
  dateOfBirth: string;
  address: string;
  city: string;
  postalCode: string;
}

export function SignupFlow({ onComplete }: SignupFlowProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    idNumber: "",
    dateOfBirth: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [documents, setDocuments] = useState({
    idDocument: null,
    proofOfAddress: null,
    selfie: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = (documentType: keyof typeof documents) => {
    // Simulate file upload
    setDocuments({
      ...documents,
      [documentType]: true,
    });
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800">
            Create Your Account
          </h1>
          <p className="text-gray-600 mt-2">Step {step} of 3</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">
                Personal Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ID Number
                </label>
                <input
                  type="text"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">
                Address Information
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Required Documents</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">ID Document</h3>
                      <p className="text-sm text-gray-500">
                        Upload a clear copy of your ID document
                      </p>
                    </div>
                    {documents.idDocument ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <button
                        onClick={() => handleFileUpload("idDocument")}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                      >
                        <Upload className="w-5 h-5" />
                        <span>Upload</span>
                      </button>
                    )}
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Proof of Address</h3>
                      <p className="text-sm text-gray-500">
                        Recent utility bill or bank statement
                      </p>
                    </div>
                    {documents.proofOfAddress ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <button
                        onClick={() => handleFileUpload("proofOfAddress")}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                      >
                        <Upload className="w-5 h-5" />
                        <span>Upload</span>
                      </button>
                    )}
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Selfie Photo</h3>
                      <p className="text-sm text-gray-500">
                        Clear photo of your face
                      </p>
                    </div>
                    {documents.selfie ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <button
                        onClick={() => handleFileUpload("selfie")}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                      >
                        <Upload className="w-5 h-5" />
                        <span>Upload</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8">
            <button
              onClick={handleNext}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              {step === 3 ? "Submit Application" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
