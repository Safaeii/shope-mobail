import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Toast: React.FC = () => {
  const { toast, dismissToast } = useStore();

  if (!toast) return null;

  return (
    <div className="fixed top-20 right-4 z-50 animate-bounce-in max-w-sm">
      <div
        className={`flex items-center gap-3 p-3.5 rounded-xl shadow-xl border backdrop-blur-md ${
          toast.type === 'success'
            ? 'bg-gray-900/95 text-white border-gray-700'
            : 'bg-white text-gray-900 border-gray-200'
        }`}
      >
        {toast.type === 'success' ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        ) : (
          <Info className="w-5 h-5 text-orange-500 shrink-0" />
        )}
        <p className="text-xs font-semibold flex-1 leading-snug">
          {toast.message}
        </p>
        <button
          onClick={dismissToast}
          className="text-gray-400 hover:text-white p-1"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
