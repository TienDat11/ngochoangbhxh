import { getPublicAssetPath } from "@/lib/site-paths";
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-image">
        <img
          src={getPublicAssetPath("/logo-hero.webp")}
          alt="Biểu trưng Công ty TNHH Tư vấn & Dịch vụ Ngọc Hoàng – Tận tâm, chuyên nghiệp, hiệu quả"
          width="1408"
          height="768"
          fetchPriority="high"
        />
      </div>
      <div className="hero-content">
        <p>CÔNG TY TNHH TƯ VẤN &amp; DỊCH VỤ</p>
        <p className="hero-brand">NGỌC HOÀNG</p>
        <p className="hero-tagline">Điểm tựa cho khởi đầu – Hài hòa cùng thịnh vượng</p>
        <h1 id="hero-title">Dịch vụ bảo hiểm xã hội (BHXH) và kế toán tại Đà Nẵng – Ngọc Hoàng</h1>
        <p>Hỗ trợ BHXH doanh nghiệp, BHXH tự nguyện, BHYT hộ gia đình, thành lập doanh nghiệp và kế toán thuế.</p>
        <a className="button button-orange" href="#lien-he">Nhận tư vấn</a>
      </div>
    </section>
  );
}
