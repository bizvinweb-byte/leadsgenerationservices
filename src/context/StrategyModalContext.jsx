"use client";

import { createContext, useContext, useState, useEffect } from "react";
import StrategyCallForm from "@/components/forms/StrategyCallForm";

const StrategyModalContext = createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function StrategyModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalSource, setModalSource] = useState("Button Click");

  const openModal = (source = "Button Click") => {
    setModalSource(source);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Lock body scroll and close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <StrategyModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}

      {/* Global Strategy Call Modal Popup */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-strategy-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
        >
          {/* Backdrop with dark blur */}
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-xl my-auto z-10 max-h-[92vh] overflow-y-auto no-scrollbar rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <StrategyCallForm
              id="modal-strategy-form"
              title="Book a Free Strategy Call"
              subtitle="Tell us a few details and our Meta Ads expert will reach out shortly."
              tagText="FAST TRACK AUDIT"
              source={modalSource}
              onClose={closeModal}
              className="border-slate-200/90 shadow-2xl"
              privacyText="Your information is 100% secure and will never be shared with anyone."
            />
          </div>
        </div>
      )}
    </StrategyModalContext.Provider>
  );
}

export function useStrategyModal() {
  const context = useContext(StrategyModalContext);
  if (!context) {
    throw new Error(
      "useStrategyModal must be used within a StrategyModalProvider"
    );
  }
  return context;
}
