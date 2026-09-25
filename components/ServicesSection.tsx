import { getPublicAssetPath } from "@/lib/site-paths";
import { SERVICES } from "@/data/site";

export function ServicesSection() {
  return (
    <section className="services section-space" id="dich-vu">
      <div className="container">
        <h2 className="section-title">DỊCH VỤ CỦA NGỌC HOÀNG</h2>
        <div className="service-grid">
          {SERVICES.map((service) => (
            <article className="service-card" key={service.title}>
              <img src={getPublicAssetPath(service.image)} width="300" height="300" alt="" loading="lazy" />
              <h3>{service.title}</h3>
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
