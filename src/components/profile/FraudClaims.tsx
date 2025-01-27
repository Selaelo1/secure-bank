import React, { useState } from 'react';
import { FraudClaim } from '../../types/fraud';
import { FraudClaimModal } from '../FraudClaimModal';
import { FraudClaimDetails } from '../FraudClaimDetails';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface FraudClaimsProps {
  fraudClaims: FraudClaim[];
  onDeleteClaim: (claimId: string) => void;
}

export function FraudClaims({ fraudClaims, onDeleteClaim }: FraudClaimsProps) {
  const [showFraudModal, setShowFraudModal] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState<FraudClaim | null>(null);

  const getStatusIcon = (status: FraudClaim['status']) => {
    switch (status) {
      case 'RESOLVED':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'REJECTED':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: FraudClaim['status']) => {
    switch (status) {
      case 'RESOLVED':
        return 'text-green-600';
      case 'REJECTED':
        return 'text-red-600';
      case 'INVESTIGATING':
        return 'text-yellow-600';
      default:
        return 'text-blue-600';
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Fraud Claims</h3>

      <div className="space-y-4">
        {fraudClaims.map((claim) => (
          <div key={claim.id} className="bg-gray-50 p-4 rounded-lg border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Claim Type</p>
                <p className="font-medium">{claim.type}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${getStatusColor(claim.status)}`}>
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