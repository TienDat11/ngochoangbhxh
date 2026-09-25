import { getPublicAssetPath } from "@/lib/site-paths";
import { COMPANY } from "@/data/site";

export function TrustSection() {
  return (
    <section className="trust section-space" id="gioi-thieu">
      <div className="container trust-inner">
        <img className="trust-mark" src={getPublicAssetPath("/logo-ngoc-hoang.svg")} alt="Biểu trưng Công ty TNHH Tư vấn & Dịch vụ Ngọc Hoàng" width="1254" height="1254" />
        <div>
          <p className="trust-lead">Điểm tựa cho khởi đầu – Hài hòa cùng thịnh vượng</p>
          <h2>Giới thiệu {COMPANY.name}</h2>
          <p>Phục vụ khách hàng bằng cả trái tim, đem đến sự an tâm, luôn tuân thủ pháp luật và không bao giờ có hành vi vụ lợi.</p>
          <p>Với đội ngũ kế toán trưởng có trên 10 năm kinh nghiệm hoạt động và tiếp cận nhiều lĩnh vực doanh nghiệp, Ngọc Hoàng cam kết kiểm soát chặt chẽ chất lượng dịch vụ và đưa ra chính sách giá hợp lý.</p>
          <p>Sự thay đổi liên tục của quy định thuế đòi hỏi doanh nghiệp phải cập nhật kịp thời để quản lý đúng, hạn chế rủi ro và tập trung vào hoạt động kinh doanh. Dịch vụ kế toán thuế trọn gói hỗ trợ thực hiện các công việc liên quan đến thuế và kế toán theo quy định.</p>
        </div>
      </div>
    </section>
  );
}
