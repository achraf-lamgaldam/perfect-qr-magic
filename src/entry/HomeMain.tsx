import { createRoot } from "react-dom/client";
import PageLayout from "@/components/PageLayout";
import Home from "@/pages/Home";
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <PageLayout>
    <Home />
  </PageLayout>
);
