import { getPublicAssetPath } from "@/lib/site-paths";
export function Hero() {
  return (
    <section className="hero" aria-label="Dịch vụ tư vấn và thuế kế toán Ngọc Hoàng">
      <div className="hero-image" aria-hidden="true">
        <img src={getPublicAssetPath("/logo.jpg")} alt="" width="1408" height="768" />
      </div>
      <div className="hero-content">
        <p>CÔNG TY TNHH TƯ VẤN &amp; DỊCH VỤ</p>
        <h1>NGỌC HOÀNG</h1>
        <p className="hero-tagline">Điểm tựa cho khởi đầu – Hài hòa cùng thịnh vượng</p>
        <p>Tư vấn thành lập doanh nghiệp, thuế, kế toán và nhân sự tại Đà Nẵng.</p>
        <a className="button button-orange" href="#lien-he">Nhận tư vấn</a>
      </div>
    </section>
  );
}
