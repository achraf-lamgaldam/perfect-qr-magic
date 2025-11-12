import { createRoot } from "react-dom/client";
import PageLayout from "@/components/PageLayout";
import Analytics from "@/pages/Analytics";
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <PageLayout>
    <Analytics />
  </PageLayout>
);
