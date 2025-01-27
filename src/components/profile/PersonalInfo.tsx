import React from 'react';
import { User, Mail, Phone, Calendar, MapPin } from 'lucide-react';

export function PersonalInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <User className="w-5 h-5 text-gray-600" />
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium">John Doe</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <Mail className="w-5 h-5 text-gray-600" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">john.doe@example.com</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <Phone className="w-5 h-5 text-gray-600" />
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">+27 71 234 5678</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <Calendar className="w-5 h-5 text-gray-600" />
          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="font-medium">15 March 1990</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <MapPin className="w-5 h-5 text-gray-600" />
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium">123 Main Street, Sandton</p>
            <p className="text-sm text-gray-500">Johannesburg, 2196</p>
          </div>
        </div>
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
        Update Information
      </button>
    </div>
  );
}