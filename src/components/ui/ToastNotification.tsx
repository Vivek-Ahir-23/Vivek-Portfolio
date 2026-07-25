"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

interface ToastNotificationProps {
  type: "success" | "error" | null;
  message: string | null;
  onClose: () => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  type,
  message,
  onClose,
}) => {
  useEffect(() => {
    if (!type || !message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [type, message, onClose]);

  return (
    <AnimatePresence>
      {type && message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-6 right-6 z-50 max-w-md w-full p-4 rounded-2xl bg-[#0d0b18]/95 border border-white/15 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-start gap-3 select-none"
        >
          {type === "success" ? (
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          ) : (
            <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-400/30 flex items-center justify-center text-rose-400 shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
          )}

          <div className="flex-1 pt-0.5">
            <h4
              className={`text-xs font-mono font-bold uppercase tracking-wider ${
                type === "success" ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {type === "success" ? "Message Sent" : "Form Error"}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-snug mt-0.5">
              {message}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
