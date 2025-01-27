import React from 'react';
import { FileText, Upload, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

interface Document {
  type: string;
  status: 'VERIFIED' | 'PENDING' | 'REJECTED';
  uploadDate: string;
}

interface DocumentsProps {
  documents: Document[];
}

export function Documents({ documents }: DocumentsProps) {
  const getStatusIcon = (status: Document['status']) => {
    switch (status) {
      case 'VERIFIED':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'REJECTED':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: Document['status']) => {
    switch (status) {
      case 'VERIFIED':
        return 'text-green-600';
      case 'REJECTED':
        return 'text-red-600';
      default:
        return 'text-yellow-600';
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Documents</h3>

      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium">{doc.type}</p>
                  <p className="text-sm text-gray-500">Uploaded on {doc.uploadDate}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${getStatusColor(doc.status)}`}>
                  {doc.status}
                </span>
                {getStatusIcon(doc.status)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
        <Upload className="w-5 h-5" />
        <span>Upload New Document</span>
      </button>
    </div>
  );
}