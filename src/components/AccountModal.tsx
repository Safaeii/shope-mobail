import React from 'react';
import { X, User, Package, ShieldCheck, MapPin, LogOut } from 'lucide-react';
import { useStore } from '../store/useStore';

export const AccountModal: React.FC = () => {
  const { isAccountOpen, setIsAccountOpen, showToast } = useStore();

  if (!isAccountOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsAccountOpen(false)}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 animate-fade-in border border-gray-100">
          {/* Header */}
          <div className="p-5 border-b border-gray-200 flex items-center justify-between bg-[#fafafa]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                SD
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  Sara Sadeghnejad
                </h3>
                <span className="text-xs text-gray-500">MobiTech Direct VIP Member</span>
              </div>
            </div>

            <button
              onClick={() => setIsAccountOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 space-y-5 text-xs">
            {/* Orders Summary */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-gray-900 flex items-center gap-1.5">
                  <Package className="w-4 h-4 text-orange-500" />
                  Recent Mobile Orders
                </span>
                <span className="text-[11px] text-orange-600 font-semibold cursor-pointer">
                  View All
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-white p-2.5 rounded-lg border border-gray-150">
                  <div>
                    <strong className="text-gray-800 block">Order #MB-829104</strong>
                    <span className="text-gray-500 text-[11px]">iPhone 15 Pro (Natural Titanium)</span>
                  </div>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                    Delivered
                  </span>
                </div>
              </div>
            </div>

            {/* Warranty Status */}
            <div className="bg-orange-50/50 rounded-xl p-4 border border-orange-100/80">
              <div className="flex items-center gap-2 text-orange-800 font-bold mb-1">
                <ShieldCheck className="w-4 h-4 text-orange-600" />
                <span>Active 2-Year Direct Protection Plan</span>
              </div>
              <p className="text-[11px] text-gray-600">
                All purchased hardware units include comprehensive damage and manufacturer coverage through 2028.
              </p>
            </div>

            {/* Saved Address */}
            <div className="space-y-1.5">
              <span className="font-bold text-gray-900 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gray-500" />
                Default Shipping Destination
              </span>
              <p className="text-gray-600 pl-5">
                742 Evergreen Terrace, San Francisco, CA 94107
              </p>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={() => {
                  showToast('Signed out of profile session', 'info');
                  setIsAccountOpen(false);
                }}
                className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>

              <button
                onClick={() => setIsAccountOpen(false)}
                className="bg-gray-900 text-white font-bold px-4 py-2 rounded-lg hover:bg-black"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
