import { createRoot } from "react-dom/client";
import PageLayout from "@/components/PageLayout";
import HowItWorksPage from "@/pages/HowItWorksPage";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <PageLayout>
    <HowItWorksPage />
  </PageLayout>
);
