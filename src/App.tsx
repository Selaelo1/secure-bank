import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { SecuritySystem } from "./components/SecuritySystem";
import { ProfileSection } from "./components/ProfileSection";
import AccountDetails from "./components/AccountDetails";
import { Account } from "./types/accounts";

export function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isDuressMode, setIsDuressMode] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<null | Account>(null);

  const handleLogin = (pin: string) => {
    if (pin === "12345") {
      setAuthenticated(true);
      setIsDuressMode(false);
    } else if (pin === "99999") {
      // Duress PIN
      setAuthenticated(true);
      setIsDuressMode(true);
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setIsDuressMode(false);
    setShowProfile(false);
    setSelectedAccount(null);
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
          ) : selectedAccount ? (
            <AccountDetails
              account={selectedAccount}
              onBack={() => setSelectedAccount(null)}
              isDuressMode={isDuressMode}
            />
          ) : (
            <Dashboard
              isDuressMode={isDuressMode}
              onSelectAccount={setSelectedAccount}
            />
          )}
        </div>
      )}
    </div>
  );
}
