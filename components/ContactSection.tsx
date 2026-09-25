import { ConsultationForm } from "@/components/ConsultationForm";

export function ContactSection() {
  return (
    <section className="contact section-space" id="lien-he">
      <div className="container contact-inner">
        <h2>Tư vấn thành lập doanh nghiệp, thuế và kế toán tại Đà Nẵng</h2>
        <ConsultationForm variant="contact" />
      </div>
    </section>
  );
}
