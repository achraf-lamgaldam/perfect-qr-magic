import { createRoot } from "react-dom/client";
import PageLayout from "@/components/PageLayout";
import Terms from "@/pages/Terms";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <PageLayout>
    <Terms />
  </PageLayout>
);
