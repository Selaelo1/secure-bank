import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { SignupFlow } from "./components/SignupFlow";
import { SecuritySystem } from "./components/SecuritySystem";
import { FicaNotification } from "./components/FicaNotification";
import { Navbar } from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { ProfileSection } from "./components/ProfileSection";
import AccountDetails from "./components/AccountDetails";
import { AboutPage } from "./pages/AboutPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { SecurityPage } from "./pages/SecurityPage";
import { BusinessPage } from "./pages/BusinessPage";
import { Account } from "./types/accounts";
import { FraudClaim } from "./types/fraud";

export function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isDuressMode, setIsDuressMode] = useState(false);
  const [currentView, setCurrentView] = useState<
    | "landing"
    | "login"
    | "signup"
    | "fica"
    | "dashboard"
    | "profile"
    | "account-details"
  >("landing");
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [, setFraudClaims] = useState<FraudClaim[]>([]);

  const handleLogin = (pin: string) => {
    if (pin === "12345") {
      setAuthenticated(true);
      setIsDuressMode(false);
      setCurrentView("dashboard");
    } else if (pin === "99999") {
      setAuthenticated(true);
      setIsDuressMode(true);
      setCurrentView("dashboard");
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setIsDuressMode(false);
    setCurrentView("landing");
  };

  const handleSignupComplete = () => {
    setCurrentView("fica");
  };

  const handleProfileClick = () => {
    setCurrentView("profile");
  };

  const handleSelectAccount = (account: Account) => {
    setSelectedAccount(account);
    setCurrentView("account-details");
  };

  const handleAddFraudClaim = (claim: FraudClaim) => {
    setFraudClaims((prevClaims) => [claim, ...prevClaims]);
  };

  const handleBackToHome = () => {
    setCurrentView("dashboard");
  };

  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-[#f8fafc]">
              {authenticated && (
                <Navbar
                  isDuressMode={isDuressMode}
                  onLogout={handleLogout}
                  onProfileClick={handleProfileClick}
                  onBackToHome={
                    currentView !== "dashboard" ? handleBackToHome : undefined
                  }
                />
              )}

              {currentView === "landing" && (
                <LandingPage
                  onLoginClick={() => setCurrentView("login")}
                  onSignupClick={() => setCurrentView("signup")}
                />
              )}

              {currentView === "login" && (
                <SecuritySystem onLogin={handleLogin} />
              )}

              {currentView === "signup" && (
                <SignupFlow onComplete={handleSignupComplete} />
              )}

              {currentView === "fica" && (
                <FicaNotification
                  onBackToHome={() => setCurrentView("landing")}
                />
              )}

              {currentView === "dashboard" && authenticated && (
                <Dashboard
                  isDuressMode={isDuressMode}
                  onSelectAccount={handleSelectAccount}
                />
              )}

              {currentView === "profile" && authenticated && (
                <ProfileSection
                  onBackToDashboard={() => setCurrentView("dashboard")}
                />
              )}

              {currentView === "account-details" &&
                authenticated &&
                selectedAccount && (
                  <AccountDetails
                    account={selectedAccount}
                    onBack={() => setCurrentView("dashboard")}
                    isDuressMode={isDuressMode}
                    onAddFraudClaim={handleAddFraudClaim}
                  />
                )}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
