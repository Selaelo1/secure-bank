import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { SignupFlow } from "./components/SignupFlow";
import { SecuritySystem } from "./components/SecuritySystem";
import { FicaNotification } from "./components/FicaNotification";
import { Navbar } from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { ProfileSection } from "./components/ProfileSection";

export function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isDuressMode, setIsDuressMode] = useState(false);
  const [currentView, setCurrentView] = useState<
    "landing" | "login" | "signup" | "fica" | "dashboard" | "profile"
  >("landing");

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

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {authenticated && (
        <Navbar
          isDuressMode={isDuressMode}
          onLogout={handleLogout}
          onProfileClick={handleProfileClick}
        />
      )}

      {currentView === "landing" && (
        <LandingPage
          onLoginClick={() => setCurrentView("login")}
          onSignupClick={() => setCurrentView("signup")}
        />
      )}

      {currentView === "login" && <SecuritySystem onLogin={handleLogin} />}

      {currentView === "signup" && (
        <SignupFlow onComplete={handleSignupComplete} />
      )}

      {currentView === "fica" && (
        <FicaNotification onBackToHome={() => setCurrentView("landing")} />
      )}

      {currentView === "dashboard" && authenticated && (
        <Dashboard isDuressMode={isDuressMode} onSelectAccount={() => {}} />
      )}

      {currentView === "profile" && authenticated && (
        <ProfileSection onBackToDashboard={() => setCurrentView("dashboard")} />
      )}
    </div>
  );
}
