"use client";

import { useEffect, useRef, useState } from "react";
import { ConsultationForm } from "@/components/ConsultationForm";

export function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);
  useEffect(() => {
    if (!isOpen) return;

    function keepFocusInside(event: KeyboardEvent) {
      if (event.key !== "Tab" || !dialogRef.current) return;
      const controls = dialogRef.current.querySelectorAll<HTMLElement>("button, input, textarea, a[href], [tabindex]:not([tabindex='-1'])");
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", keepFocusInside);
    return () => document.removeEventListener("keydown", keepFocusInside);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="consultation-overlay" onMouseDown={(event) => {
      if (event.target === event.currentTarget) setIsOpen(false);
    }}>
      <section ref={dialogRef} className="consultation-modal" role="dialog" aria-modal="true" aria-labelledby="consultation-title">
        <button
          ref={closeButtonRef}
          className="consultation-close"
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Đóng cửa sổ tư vấn"
        >
          <span aria-hidden="true">×</span>
        </button>
        <h2 id="consultation-title">GỬI YÊU CẦU TƯ VẤN</h2>
        <p className="consultation-subtitle"><strong>Tư vấn BHXH, BHYT, thành lập công ty, thuế và kế toán</strong></p>
        <ConsultationForm variant="modal" />
      </section>
    </div>
  );
}
