import { getPublicAssetPath } from "@/lib/site-paths";
import { NEWS_ITEMS } from "@/data/site";

export function NewsSection() {
  return (
    <section className="news section-space" id="co-hoi-moi">
      <div className="container">
        <h2 className="section-title">CÓ GÌ MỚI?</h2>
        <div className="news-grid">
          {NEWS_ITEMS.map((item) => (
            <article key={item.title}>
              <div>
                <img src={getPublicAssetPath(item.image)} alt="" width="500" height="281" loading="lazy" />
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
