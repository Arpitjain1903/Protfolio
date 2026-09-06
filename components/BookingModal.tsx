"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState("2026-09-10");
  const [selectedTime, setSelectedTime] = useState("11:00 AM");
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#1E1D1A] border border-[#3A3833] w-full max-w-lg rounded-[20px] p-6 sm:p-8 space-y-6 relative text-[#EDECE8]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#161513] border border-[#2A2925] text-[#8A887F] hover:text-[#EDECE8] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8A887F]">
              CALENDLY APPOINTMENT
            </span>
            <h3 className="text-[20px] font-semibold text-[#EDECE8]">Book a 15-min Discovery Call</h3>
            <p className="text-[13px] text-[#B8B6AE]">
              Schedule a 1-on-1 discussion with Arpit regarding AI projects or roles.
            </p>
          </div>

          {booked ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-[#EDECE8] mx-auto" />
              <h4 className="text-[16px] font-semibold text-[#EDECE8]">Call Scheduled!</h4>
              <p className="text-[13px] text-[#8A887F]">
                A calendar invite for {selectedDate} at {selectedTime} has been queued.
              </p>
              <button
                onClick={() => {
                  setBooked(false);
                  onClose();
                }}
                className="mt-4 bg-[#EDECE8] text-[#161513] text-[13px] font-semibold px-6 py-2.5 rounded-full"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleConfirm} className="space-y-5">
              {/* Select Date */}
              <div className="space-y-2">
                <label className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8A887F] flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  Select Date
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["2026-09-08", "2026-09-09", "2026-09-10"].map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setSelectedDate(d)}
                      className={`p-2.5 rounded-[12px] text-[12px] font-mono border transition-all ${
                        selectedDate === d
                          ? "bg-[#EDECE8] text-[#161513] border-[#EDECE8] font-semibold"
                          : "bg-[#161513] text-[#8A887F] border-[#2A2925] hover:border-[#3A3833]"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Time */}
              <div className="space-y-2">
                <label className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8A887F] flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  Select Time (IST)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["10:00 AM", "11:00 AM", "04:00 PM"].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`p-2.5 rounded-[12px] text-[12px] font-mono border transition-all ${
                        selectedTime === t
                          ? "bg-[#EDECE8] text-[#161513] border-[#EDECE8] font-semibold"
                          : "bg-[#161513] text-[#8A887F] border-[#2A2925] hover:border-[#3A3833]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email inputs */}
              <div className="space-y-3 pt-2">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  suppressHydrationWarning
                  className="w-full px-4 py-2.5 rounded-[12px] bg-[#161513] border border-[#2A2925] focus:border-[#EDECE8] text-[#EDECE8] text-[13px] outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  suppressHydrationWarning
                  className="w-full px-4 py-2.5 rounded-[12px] bg-[#161513] border border-[#2A2925] focus:border-[#EDECE8] text-[#EDECE8] text-[13px] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#EDECE8] hover:bg-[#FFFFFF] text-[#161513] text-[13.5px] font-semibold py-3 rounded-full transition-all transform active:scale-95"
              >
                Confirm Booking ({selectedDate} @ {selectedTime})
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
