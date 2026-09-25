"use client";

import { useState, type FormEvent } from "react";

interface ConsultationFormProps {
  variant: "modal" | "contact";
}

export function ConsultationForm({ variant }: ConsultationFormProps) {
  const [status, setStatus] = useState("");
  const modal = variant === "modal";
  const prefix = modal ? "modal" : "contact";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Đây là bản trình diễn: thông tin chưa được gửi hoặc lưu.");
    event.currentTarget.reset();
  }

  return (
    <form className={modal ? "consultation-form" : "contact-form"} onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={`${prefix}-name`}>Tên của bạn</label>
      <input id={`${prefix}-name`} name="name" type="text" placeholder="Tên của bạn" autoComplete="name" required />
      <label className="sr-only" htmlFor={`${prefix}-phone`}>Số điện thoại hoặc Zalo</label>
      <input id={`${prefix}-phone`} name="phone" type="tel" placeholder="Số điện thoại hoặc Zalo" autoComplete="tel" required />
      <label className="sr-only" htmlFor={`${prefix}-message`}>Nội dung cần tư vấn</label>
      <textarea id={`${prefix}-message`} name="message" rows={modal ? 5 : 4} placeholder="Nội dung cần tư vấn (Ví dụ: đóng BHXH cho nhân viên, gia hạn BHYT hộ gia đình)" required />
      <button className="button button-orange" type="submit">GỬI YÊU CẦU TƯ VẤN</button>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}
