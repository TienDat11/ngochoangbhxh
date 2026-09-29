import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { StaffShowcase } from "@/components/StaffShowcase";
import { ABOUT_MOTTO, ABOUT_SLOGAN } from "@/data/about";
import { COMPANY, ROUTES } from "@/data/site";
import { getPublicAssetPath } from "@/lib/site-paths";

/** Mục "Về chúng tôi" trên trang chủ: đoạn giới thiệu ngắn + thẻ nhân sự; nội dung đầy đủ nằm ở trang /gioi-thieu/. */
export function AboutTeaser() {
  return (
    <section className="about-teaser section-space" aria-labelledby="about-teaser-title">
      <div className="container">
        <SectionTitle id="about-teaser-title">Về chúng tôi</SectionTitle>
        <div className="about-teaser-inner">
          <img className="about-teaser-mark" src={getPublicAssetPath("/logo-ngoc-hoang-192.png")} alt="" width="192" height="192" loading="lazy" />
          <div>
            <h3 className="about-teaser-heading">Về {COMPANY.name}</h3>
            <p className="about-teaser-slogan">“{ABOUT_SLOGAN}”</p>
            <p>{ABOUT_MOTTO.join(" ")}</p>
            <Link className="text-link" href={ROUTES.about}>Xem giới thiệu Ngọc Hoàng →</Link>
          </div>
        </div>
        <StaffShowcase />
      </div>
    </section>
  );
}
