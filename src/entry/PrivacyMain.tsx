import { createRoot } from "react-dom/client";
import PageLayout from "@/components/PageLayout";
import Privacy from "@/pages/Privacy";
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <PageLayout>
    <Privacy />
  </PageLayout>
);
