import { getPublicAssetPath } from "@/lib/site-paths";
import { COMPANY } from "@/data/site";

export function TrustSection() {
  return (
    <section className="trust section-space" id="gioi-thieu">
      <div className="container trust-inner">
        <img className="trust-mark" src={getPublicAssetPath("/logo-ngoc-hoang-256.png")} alt="Biểu trưng Công ty TNHH Tư vấn & Dịch vụ Ngọc Hoàng" width="256" height="256" loading="lazy" />
        <div>
          <p className="trust-lead">Điểm tựa cho khởi đầu – Hài hòa cùng thịnh vượng</p>
          <h2>Giới thiệu {COMPANY.name}</h2>
          <p>Ngọc Hoàng là công ty tư vấn tại Đà Nẵng (mã số thuế {COMPANY.taxId}), hỗ trợ cá nhân, hộ gia đình và doanh nghiệp các thủ tục bảo hiểm xã hội (BHXH), bảo hiểm y tế (BHYT), thành lập doanh nghiệp, thuế và kế toán.</p>
          <p>Chúng tôi làm việc tận tâm, minh bạch và tuân thủ pháp luật: giải thích rõ hồ sơ cần chuẩn bị, thống nhất phạm vi công việc và chi phí trước khi thực hiện, đồng thời cập nhật tiến độ để khách hàng yên tâm.</p>
          <p>Quy định về BHXH, BHYT và thuế thay đổi thường xuyên. Đội ngũ tư vấn của Ngọc Hoàng theo dõi các văn bản mới để hướng dẫn doanh nghiệp kê khai, đóng nộp đúng hạn và giúp người lao động hiểu rõ quyền lợi của mình.</p>
        </div>
      </div>
    </section>
  );
}
