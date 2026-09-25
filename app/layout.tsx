import type { Metadata } from "next";
import localFont from "next/font/local";
import { COMPANY } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const quicksand = localFont({
  src: "../public/assets/6xKtdSZaM9iE8KbpRA_hK1QN-21dc8b9f.woff2",
  variable: "--font-quicksand",
  display: "swap",
  weight: "300 700",
});

const siteUrl = getSiteUrl();
const siteUrlString = siteUrl?.toString();
const pageTitle = "Tư vấn doanh nghiệp, kế toán thuế tại Đà Nẵng | Ngọc Hoàng";
const pageDescription =
  "Ngọc Hoàng tư vấn thành lập doanh nghiệp, dịch vụ thuế, kế toán và nhân sự tại Đà Nẵng.";
const socialImage = siteUrlString ? `${siteUrlString}og-ngoc-hoang.png` : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: pageTitle,
    template: "%s | Ngọc Hoàng",
  },
  description: pageDescription,
  keywords: [
    "tư vấn thành lập doanh nghiệp",
    "dịch vụ kế toán thuế",
    "dịch vụ thuế doanh nghiệp",
    "Đà Nẵng",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  alternates: siteUrlString ? { canonical: siteUrlString } : undefined,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: COMPANY.name,
    title: pageTitle,
    description: pageDescription,
    ...(siteUrlString
      ? {
          url: siteUrlString,
          images: [{ url: socialImage!, width: 1200, height: 630, alt: "Logo Công ty TNHH Tư vấn & Dịch vụ Ngọc Hoàng" }],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    ...(socialImage ? { images: [{ url: socialImage, alt: "Logo Công ty TNHH Tư vấn & Dịch vụ Ngọc Hoàng" }] } : {}),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={quicksand.variable}>
        <a className="skip-link" href="#main">Bỏ qua điều hướng</a>
        {children}
      </body>
    </html>
  );
}
