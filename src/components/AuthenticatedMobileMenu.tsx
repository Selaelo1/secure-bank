import React from 'react';
import { X, Bell, UserCircle, LogOut } from 'lucide-react';

interface AuthenticatedMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  onProfileClick: () => void;
  isDuressMode: boolean;
}

export function AuthenticatedMobileMenu({
  isOpen,
  onClose,
  onLogout,
  onProfileClick,
  isDuressMode,
}: AuthenticatedMobileMenuProps) {
  if (!isOpen) return null;

  const handleItemClick = (callback: () => void) => {
    callback();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-[75%] max-w-sm bg-white">
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold text-gray-900">Menu</span>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4">
          <div className="space-y-1">
            <button
              onClick={() => handleItemClick(onProfileClick)}
              className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              <UserCircle className="w-5 h-5" />
              <span>Profile</span>
            </button>
            <button
              className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </button>
            <button
              onClick={() => handleItemClick(onLogout)}
              className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}