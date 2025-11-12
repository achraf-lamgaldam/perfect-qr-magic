import { createRoot } from "react-dom/client";
import PageLayout from "@/components/PageLayout";
import Generator from "@/pages/Generator";
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <PageLayout>
    <Generator />
  </PageLayout>
);
