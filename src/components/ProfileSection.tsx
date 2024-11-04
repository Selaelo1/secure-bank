import { useState } from "react";
import {
  User,
  Lock,
  FileText,
  Bell,
  Shield,
  Camera,
  Upload,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface Document {
  type: string;
  status: "PENDING" | "VERIFIED" | "REJECTED";
  uploadDate: string;
}

export function ProfileSection() {
  const [activeTab, setActiveTab] = useState("personal");
  const [documents, setDocuments] = useState<Document[]>([
    { type: "ID Document", status: "VERIFIED", uploadDate: "2024-02-15" },
    { type: "Proof of Address", status: "PENDING", uploadDate: "2024-03-14" },
    { type: "Bank Statement", status: "REJECTED", uploadDate: "2024-03-10" },
  ]);

  const handleFileUpload = (documentType: string) => {
    const newDoc: Document = {
      type: documentType,
      status: "PENDING",
      uploadDate: new Date().toISOString().split("T")[0],
    };
    setDocuments([...documents, newDoc]);
  };

  const getStatusIcon = (status: Document["status"]) => {
    switch (status) {
      case "VERIFIED":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "REJECTED":
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Upload className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto pt-24 px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        {/* Profile Header */}
        <div className="p-6 border-b flex items-center space-x-4">
          <div className="relative">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-blue-600" />
            </div>
            <button className="absolute bottom-0 right-0 bg-blue-600 p-1.5 rounded-full text-white">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-500">john.doe@example.com</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b">
          <nav className="flex space-x-6 px-6">
            {[
              { id: "personal", label: "Personal Info", icon: User },
              { id: "security", label: "Security", icon: Lock },
              { id: "documents", label: "Documents", icon: FileText },
              { id: "notifications", label: "Notifications", icon: Bell },
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
          {activeTab === "personal" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
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
                        <p className="font-medium text-gray-800">{doc.type}</p>
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
        </div>
      </div>
    </div>
  );
}
