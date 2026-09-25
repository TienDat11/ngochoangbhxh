"use client";

import { useEffect, useState } from "react";
import { COMPANY, NAVIGATION } from "@/data/site";
import { getPublicAssetPath } from "@/lib/site-paths";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header" id="top">
      <div className="topline">
        <div className="container topline-inner">
          <span>ĐIỂM TỰA CHO KHỞI ĐẦU – HÀI HÒA CÙNG THỊNH VƯỢNG</span>
          <span>Gửi yêu cầu tư vấn <b aria-hidden="true">/</b> Hotline hỗ trợ <a href={COMPANY.phoneHref}>{COMPANY.phone}</a></span>
        </div>
      </div>
      <div className="nav-wrap">
        <div className="container nav-row">
          <button
            id="primary-menu-toggle"
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-icon" aria-hidden="true"><i /><i /><i /></span>
          </button>
          <a className="brand" href="#top" aria-label="Ngọc Hoàng — Trang chủ">
            <img src={getPublicAssetPath("/logo-ngoc-hoang.svg")} width="1254" height="1254" alt="Biểu trưng Công ty TNHH Tư vấn & Dịch vụ Ngọc Hoàng" />
          </a>
          <nav className={`primary-nav${menuOpen ? " is-open" : ""}`} id="primary-nav" aria-label="Điều hướng chính">
            {NAVIGATION.map((item) => (
              <a key={item.label} href={item.href} aria-current={item.href === "#top" ? "page" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
          </nav>
          <a className="nav-phone" href={COMPANY.phoneHref}>{COMPANY.phone}</a>
        </div>
      </div>
    </header>
  );
}
