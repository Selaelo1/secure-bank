import React from 'react';
import { Key, Smartphone, Shield, History } from 'lucide-react';

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Security Settings</h3>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Key className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium">Password</p>
                <p className="text-sm text-gray-500">Last changed 30 days ago</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Change
            </button>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Smartphone className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Enabled via SMS</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Configure
            </button>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium">Login Alerts</p>
                <p className="text-sm text-gray-500">Receive alerts for unusual activity</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Configure
            </button>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <History className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium">Recent Activity</p>
                <p className="text-sm text-gray-500">View login history and activity</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}