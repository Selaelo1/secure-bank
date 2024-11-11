import { useState } from "react";
import {
  User,
  Lock,
  FileText,
  Bell,
  Shield,
  Camera,
  ArrowLeft,
  Upload,
  CheckCircle,
  AlertTriangle,
  AlertOctagon,
  Clock,
} from "lucide-react";
import { FraudClaim } from "../types/fraud";
import { FraudClaimModal } from "./FraudClaimModal";
import { FraudClaimDetails } from "./FraudClaimDetails";

interface ProfileSectionProps {
  onBackToDashboard: () => void;
}

interface Document {
  type: string;
  status: "PENDING" | "VERIFIED" | "REJECTED";
  uploadDate: string;
}

export function ProfileSection({ onBackToDashboard }: ProfileSectionProps) {
  const [activeTab, setActiveTab] = useState("fraud");
  const [showFraudModal, setShowFraudModal] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState<FraudClaim | null>(null);
  const [documents] = useState<Document[]>([
    { type: "ID Document", status: "VERIFIED", uploadDate: "2024-02-15" },
    { type: "Proof of Address", status: "PENDING", uploadDate: "2024-03-14" },
    { type: "Bank Statement", status: "REJECTED", uploadDate: "2024-03-10" },
  ]);

  const [fraudClaims, setFraudClaims] = useState<FraudClaim[]>([
    {
      id: "FR001",
      date: "2024-03-10",
      type: "Unauthorized Transaction",
      amount: 2500,
      status: "INVESTIGATING",
      description: "Unknown transaction at foreign merchant",
      lastUpdate: "2024-03-12",
      agent: {
        name: "Sarah Johnson",
        department: "Fraud Investigation Unit",
        email: "sarah.j@securebank.com",
        phone: "+27 123 456 789",
      },
      updates: [
        {
          date: "2024-03-12",
          message: "Investigation initiated. Reviewing transaction logs.",
        },
        {
          date: "2024-03-11",
          message: "Case assigned to investigator.",
        },
      ],
    },
    {
      id: "FR002",
      date: "2024-02-28",
      type: "Card Skimming",
      amount: 1200,
      status: "RESOLVED",
      description: "Card was skimmed at ATM",
      lastUpdate: "2024-03-05",
      agent: {
        name: "Michael Brown",
        department: "Card Security Team",
        email: "m.brown@securebank.com",
        phone: "+27 123 456 790",
      },
      updates: [
        {
          date: "2024-03-05",
          message: "Claim resolved. Funds have been refunded.",
        },
        {
          date: "2024-03-01",
          message: "ATM footage reviewed. Skimming device identified.",
        },
      ],
    },
  ]);

  const handleNewFraudClaim = (data: {
    type: string;
    description: string;
    amount: number;
    date: string;
  }) => {
    const newClaim: FraudClaim = {
      id: `FR${String(fraudClaims.length + 1).padStart(3, "0")}`,
      date: data.date,
      type: data.type,
      amount: data.amount,
      status: "AWAITING_AGENT",
      description: data.description,
      lastUpdate: new Date().toISOString().split("T")[0],
    };
    setFraudClaims([newClaim, ...fraudClaims]);
    setShowFraudModal(false);
  };

  const handleDeleteClaim = (claimId: string) => {
    if (window.confirm("Are you sure you want to cancel this claim?")) {
      setFraudClaims(fraudClaims.filter((claim) => claim.id !== claimId));
      setSelectedClaim(null);
    }
  };

  const getStatusIcon = (status: Document["status"] | FraudClaim["status"]) => {
    switch (status) {
      case "VERIFIED":
      case "RESOLVED":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "REJECTED":
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case "INVESTIGATING":
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return <AlertOctagon className="w-5 h-5 text-blue-500" />;
    }
  };

  const getStatusColor = (status: FraudClaim["status"]) => {
    switch (status) {
      case "RESOLVED":
        return "text-green-600";
      case "REJECTED":
        return "text-red-600";
      case "INVESTIGATING":
        return "text-yellow-600";
      case "AWAITING_AGENT":
        return "text-blue-600";
      default:
        return "text-blue-600";
    }
  };

  function handleFileUpload(_arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b px-4 py-4 sticky top-0 z-10">
        <button
          onClick={onBackToDashboard}
          className="flex items-center space-x-2 text-gray-600"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Dashboard</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto pt-6 lg:pt-24 px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          {/* Profile Header */}
          <div className="p-6 border-b flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
              </div>
              <button className="absolute bottom-0 right-0 bg-blue-600 p-1.5 rounded-full text-white">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                John Doe
              </h1>
              <p className="text-gray-500">john.doe@example.com</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b overflow-x-auto">
            <nav className="flex space-x-6 px-6 whitespace-nowrap">
              {[
                { id: "personal", label: "Personal Info", icon: User },
                { id: "security", label: "Security", icon: Lock },
                { id: "documents", label: "Documents", icon: FileText },
                { id: "notifications", label: "Notifications", icon: Bell },
                { id: "fraud", label: "Fraud Claims", icon: Shield },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition ${
                    activeTab === id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content Sections */}
          <div className="p-6">
            {/* Personal Information */}
            {activeTab === "personal" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+27 123 456 789"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      defaultValue="123 Main Street, Johannesburg"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Save Changes
                </button>
              </div>
            )}

            {/* Security */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Change Password
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Update Password
                  </button>
                </div>

                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Two-Factor Authentication
                  </h3>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-800">
                          2FA is enabled
                        </p>
                        <p className="text-sm text-gray-500">
                          Your account is protected
                        </p>
                      </div>
                    </div>
                    <button className="text-red-600 hover:text-red-700 font-medium">
                      Disable
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Documents */}
            {activeTab === "documents" && (
              <div className="space-y-6">
                <div className="grid gap-4">
                  {documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-800">
                            {doc.type}
                          </p>
                          <p className="text-sm text-gray-500">
                            Uploaded on {doc.uploadDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`text-sm font-medium ${
                            doc.status === "VERIFIED"
                              ? "text-green-600"
                              : doc.status === "REJECTED"
                              ? "text-red-600"
                              : "text-blue-600"
                          }`}
                        >
                          {doc.status}
                        </span>
                        {getStatusIcon(doc.status)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => handleFileUpload("New Document")}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <Upload className="w-5 h-5" />
                    <span>Upload New Document</span>
                  </button>
                </div>
              </div>
            )}

            {/* Notifications */}
            {activeTab === "notifications" && (
              <div className="space-y-4">
                {[
                  "Push Notifications",
                  "Email Notifications",
                  "SMS Notifications",
                  "Marketing Communications",
                ].map((setting) => (
                  <div
                    key={setting}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-800">{setting}</p>
                      <p className="text-sm text-gray-500">
                        Receive notifications about account activity
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            )}

            {/* Fraud Claims */}
            {activeTab === "fraud" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Fraud Claims
                </h3>

                <div className="space-y-4">
                  {fraudClaims.map((claim) => (
                    <div
                      key={claim.id}
                      className="bg-gray-50 p-4 rounded-lg border"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Claim Type</p>
                          <p className="font-medium">{claim.type}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`text-sm font-medium ${getStatusColor(
                              claim.status
                            )}`}
                          >
                            {claim.status.replace(/_/g, " ").toLowerCase()}
                          </span>
                          {getStatusIcon(claim.status)}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                        <div>
                          <p className="text-gray-500">Date Reported</p>
                          <p className="font-medium">{claim.date}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Amount</p>
                          <p className="font-medium">
                            R{" "}
                            {claim.amount.toLocaleString("en-ZA", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-gray-500">Description</p>
                          <p className="font-medium">{claim.description}</p>
                        </div>
                      </div>

                      <div className="pt-3 border-t flex justify-between items-center">
                        <button
                          onClick={() => setSelectedClaim(claim)}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          View Details
                        </button>
                        {claim.status === "AWAITING_AGENT" && (
                          <button
                            onClick={() => handleDeleteClaim(claim.id)}
                            className="text-red-600 hover:text-red-700 text-sm font-medium"
                          >
                            Cancel Claim
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showFraudModal && (
        <FraudClaimModal
          onClose={() => setShowFraudModal(false)}
          onSubmit={handleNewFraudClaim}
        />
      )}

      {selectedClaim && (
        <FraudClaimDetails
          claim={selectedClaim}
          onClose={() => setSelectedClaim(null)}
          onDelete={handleDeleteClaim}
        />
      )}
    </div>
  );
}
