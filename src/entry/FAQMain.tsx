import { createRoot } from "react-dom/client";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/pages/FAQ";
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <PageLayout>
    <FAQ />
  </PageLayout>
);
