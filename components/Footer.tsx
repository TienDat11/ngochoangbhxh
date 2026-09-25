import { getPublicAssetPath } from "@/lib/site-paths";
import { COMPANY, FOOTER_LINK_GROUPS } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-company">
          <a href="#top" className="footer-brand"><img src={getPublicAssetPath("/logo-ngoc-hoang-256.png")} alt="Biểu trưng Công ty TNHH Tư vấn & Dịch vụ Ngọc Hoàng" width="256" height="256" loading="lazy" /></a>
          <h2>{COMPANY.name}</h2>
          <p>{COMPANY.address}, {COMPANY.city}</p>
          <p className="footer-tax">Mã số thuế: {COMPANY.taxId}</p>
          <p><a href={COMPANY.phoneHref}>{COMPANY.phone}</a><br /><a href={COMPANY.hotlineHref}>Hotline: {COMPANY.hotline}</a></p>
          {COMPANY.email && <p><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>}
        </div>
        {FOOTER_LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <h2>{group.title}</h2>
            <ul>{group.links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="copyright"><div className="container">© <strong>{COMPANY.name}</strong></div></div>
    </footer>
  );
}
