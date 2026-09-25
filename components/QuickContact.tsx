"use client";

import { COMPANY } from "@/data/site";

import { getPublicAssetPath } from "@/lib/site-paths";
export function QuickContact() {
  return (
    <nav className="quick-contact" aria-label="Liên hệ nhanh">
      <a href={COMPANY.zaloHref} className="quick-link quick-link-zalo" aria-label="Nhắn Zalo">
        <img src={getPublicAssetPath("/zalo-icon.svg")} alt="" width="32" height="32" />
        <span>Zalo</span>
      </a>
      <a href={COMPANY.hotlineHref} className="quick-link quick-link-phone" aria-label={`Gọi ${COMPANY.hotline}`}>
        <img src={getPublicAssetPath("/phone-icon.svg")} alt="" width="32" height="32" />
        <span>{COMPANY.hotline}</span>
      </a>
    </nav>
  );
}
