import { getPublicAssetPath } from "@/lib/site-paths";
import { WORKFLOW_STEPS } from "@/data/site";

export function WorkflowSection() {
  return (
    <section className="workflow section-space" id="quy-trinh">
      <div className="container">
        <h2 className="section-title">QUY TRÌNH LÀM VIỆC</h2>
        <div className="workflow-grid">
          {WORKFLOW_STEPS.map((step) => (
            <article key={step.title}>
              <img src={getPublicAssetPath(step.image)} alt="" width="299" height="443" loading="lazy" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
