import { useState } from "react";
import { Shield, Bell, UserCircle, Menu, LogOut } from "lucide-react";

interface NavbarProps {
  isDuressMode: boolean;
  onLogout: () => void;
  onProfileClick: () => void;
}

export function Navbar({
  isDuressMode,
  onLogout,
  onProfileClick,
}: NavbarProps) {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Shield className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">SecureBank</span>
        </div>

        {isDuressMode && (
          <div className="bg-red-50 px-4 py-1 rounded-full">
            <span className="text-red-600 text-sm font-medium">
              Maintenance Mode
            </span>
          </div>
        )}

        <div className="flex items-center space-x-4">
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
          <button className="p-2 hover:bg-gray-100 rounded-full md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
}
