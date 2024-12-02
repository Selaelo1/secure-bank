import {
  X,
  Phone,
  Mail,
  MessageSquare,
  AlertTriangle,
  Clock,
  CheckCircle,
} from "lucide-react";
import { FraudClaim } from "../types/fraud";

interface FraudClaimDetailsProps {
  claim: FraudClaim;
  onClose: () => void;
  onDelete?: (claimId: string) => void;
}

export function FraudClaimDetails({
  claim,
  onClose,
  onDelete,
}: FraudClaimDetailsProps) {
  const getStatusIcon = (status: FraudClaim["status"]) => {
    switch (status) {
      case "RESOLVED":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "REJECTED":
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case "INVESTIGATING":
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return <Clock className="w-5 h-5 text-blue-500" />;
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
      default:
        return "text-blue-600";
    }
  };

  const formatStatus = (status: string) => {
    return status
      .replace(/_/g, " ")
      .toLowerCase()
      .replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const handleContactAgent = (method: "call" | "email" | "message") => {
    if (!claim.agent) return;

    switch (method) {
      case "call":
        window.location.href = `tel:${claim.agent.phone}`;
        break;
      case "email":
        window.location.href = `mailto:${claim.agent.email}`;
        break;
      case "message":
        // Implement in-app messaging or chat functionality
        alert("Chat functionality coming soon");
        break;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-lg my-8">
        <div className="flex justify-between items-center p-6 border-b">
          <div className="flex items-center space-x-3">
            {getStatusIcon(claim.status)}
            <div>
              <h2 className="text-xl font-semibold">Claim Details</h2>
              <p
                className={`text-sm font-medium ${getStatusColor(
                  claim.status
                )}`}
              >
                {formatStatus(claim.status)}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Claim ID</p>
              <p className="font-medium">{claim.id}</p>
            </div>
            <div>
              <p className="text-gray-500">Type</p>
              <p className="font-medium">{claim.type}</p>
            </div>
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
          </div>

          <div>
            <p className="text-gray-500 mb-1">Description</p>
            <p className="font-medium">{claim.description}</p>
          </div>

          {claim.agent && (
            <div className="bg-blue-50 p-4 rounded-xl space-y-4">
              <div>
                <p className="text-gray-500">Investigating Agent</p>
                <p className="font-medium">{claim.agent.name}</p>
                <p className="text-sm text-gray-500">
                  {claim.agent.department}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  onClick={() => handleContactAgent("call")}
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call</span>
                </button>
                <button
                  onClick={() => handleContactAgent("email")}
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </button>
                <button
                  onClick={() => handleContactAgent("message")}
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Message</span>
                </button>
              </div>
            </div>
          )}

          {claim.updates && claim.updates.length > 0 && (
            <div className="space-y-3">
              <p className="font-medium text-gray-800">Case Updates</p>
              <div className="space-y-2">
                {claim.updates.map((update, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-3 rounded-lg text-sm"
                  >
                    <p className="text-gray-500 mb-1">{update.date}</p>
                    <p className="font-medium">{update.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {claim.status === "AWAITING_AGENT" && onDelete && (
          <div className="p-6 border-t">
            <button
              onClick={() => onDelete(claim.id)}
              className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-100 transition"
            >
              Cancel Claim
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
