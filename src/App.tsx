import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SecuritySystem from "./components/SecuritySystem";
import { ProfileSection } from "./components/ProfileSection";

export function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isDuressMode, setIsDuressMode] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleLogin = (pin: string) => {
    if (pin === "1234") {
      setAuthenticated(true);
      setIsDuressMode(false);
    } else if (pin === "9999") {
      // Duress PIN
      setAuthenticated(true);
      setIsDuressMode(true);
      // In a real app, this would trigger silent alerts and safety protocols
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setIsDuressMode(false);
    setShowProfile(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {!authenticated ? (
        <SecuritySystem onLogin={handleLogin} />
      ) : (
        <div className="flex flex-col h-screen">
          <Navbar
            isDuressMode={isDuressMode}
            onLogout={handleLogout}
            onProfileClick={() => setShowProfile(!showProfile)}
          />
          {showProfile ? (
            <ProfileSection />
          ) : (
            <Dashboard isDuressMode={isDuressMode} />
          )}
        </div>
      )}
    </div>
  );
}
