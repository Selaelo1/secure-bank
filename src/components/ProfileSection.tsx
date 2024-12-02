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
  fraudClaims: FraudClaim[];
  onDeleteClaim: (claimId: string) => void;
}

export function ProfileSection({ 
  onBackToDashboard, 
  fraudClaims,
  onDeleteClaim 
}: ProfileSectionProps) {
  const [activeTab, setActiveTab] = useState("fraud");
  const [showFraudModal, setShowFraudModal] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState<FraudClaim | null>(null);
  const [documents] = useState<Document[]>([
    { type: "ID Document", status: "VERIFIED", uploadDate: "2024-02-15" },
    { type: "Proof of Address", status: "PENDING", uploadDate: "2024-03-14" },
    { type: "Bank Statement", status: "REJECTED", uploadDate: "2024-03-10" },
  ]);

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
                            onClick={() => onDeleteClaim(claim.id)}
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
          onSubmit={() => {}}
        />
      )}

      {selectedClaim && (
        <FraudClaimDetails
          claim={selectedClaim}
          onClose={() => setSelectedClaim(null)}
          onDelete={onDeleteClaim}
        />
      )}
    </div>
  );
}