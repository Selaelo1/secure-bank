import { useState } from "react";
import {
  Shield,
  Bell,
  UserCircle,
  Menu,
  LogOut,
  ArrowLeft,
} from "lucide-react";
import { AuthenticatedMobileMenu } from "./AuthenticatedMobileMenu";

interface NavbarProps {
  isDuressMode: boolean;
  onLogout: () => void;
  onProfileClick: () => void;
  onBackToHome?: () => void;
}

export function Navbar({
  isDuressMode,
  onLogout,
  onProfileClick,
  onBackToHome,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed w-full top-0 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            )}
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">SecureBank</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="w-6 h-6 text-gray-600" />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={onProfileClick}
            >
              <UserCircle className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={onLogout}
              className="p-2 hover:bg-gray-100 rounded-full text-red-600"
            >
              <LogOut className="w-6 h-6" />
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </nav>

      <AuthenticatedMobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onLogout={onLogout}
        onProfileClick={onProfileClick}
        isDuressMode={isDuressMode}
      />
    </>
  );
}
