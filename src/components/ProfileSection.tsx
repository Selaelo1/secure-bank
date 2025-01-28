import { useState } from "react";
import {
  User,
  Lock,
  FileText,
  Bell,
  Shield,
  Camera,
  ArrowLeft,
  ChevronDown,
} from "lucide-react";
import { FraudClaim } from "../types/fraud";
import { PersonalInfo } from "./profile/PersonalInfo";
import { SecuritySettings } from "./profile/SecuritySettings";
import { Documents } from "./profile/Documents";
import { Notifications } from "./profile/Notifications";
import { FraudClaims } from "./profile/FraudClaims";

interface ProfileSectionProps {
  onBackToDashboard: () => void;
  fraudClaims: FraudClaim[];
  onDeleteClaim: (claimId: string) => void;
}

export function ProfileSection({
  onBackToDashboard,
  fraudClaims,
  onDeleteClaim,
}: ProfileSectionProps) {
  const [activeTab, setActiveTab] = useState("personal");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [documents] = useState([
    {
      type: "ID Document",
      status: "VERIFIED" as const,
      uploadDate: "2024-02-15",
    },
    {
      type: "Proof of Address",
      status: "PENDING" as const,
      uploadDate: "2024-03-14",
    },
    {
      type: "Bank Statement",
      status: "REJECTED" as const,
      uploadDate: "2024-03-10",
    },
  ]);

  const tabs = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "security", label: "Security", icon: Lock },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "fraud", label: "Fraud Claims", icon: Shield },
  ];

  const getCurrentTabLabel = () => {
    return tabs.find((tab) => tab.id === activeTab)?.label || "";
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b px-4 py-4 sticky top-0 z-20">
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToDashboard}
            className="flex items-center space-x-2 text-gray-600"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </button>
        </div>
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

          {/* Mobile Tab Selector */}
          <div className="lg:hidden border-b">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-between w-full p-4 text-left"
            >
              <div className="flex items-center space-x-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  if (tab.id === activeTab) {
                    return (
                      <Icon key={tab.id} className="w-5 h-5 text-blue-600" />
                    );
                  }
                  return null;
                })}
                <span className="font-medium">{getCurrentTabLabel()}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="border-t">
                {tabs.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => handleTabChange(id)}
                    className={`flex items-center space-x-3 w-full p-4 text-left transition ${
                      activeTab === id
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Navigation Tabs */}
          <div className="hidden lg:block border-b overflow-x-auto">
            <nav className="flex space-x-6 px-6 whitespace-nowrap">
              {tabs.map(({ id, label, icon: Icon }) => (
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
            {activeTab === "personal" && <PersonalInfo />}
            {activeTab === "security" && <SecuritySettings />}
            {activeTab === "documents" && <Documents documents={documents} />}
            {activeTab === "notifications" && <Notifications />}
            {activeTab === "fraud" && (
              <FraudClaims
                fraudClaims={fraudClaims}
                onDeleteClaim={onDeleteClaim}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
