import { createRoot } from "react-dom/client";
import PageLayout from "@/components/PageLayout";
import About from "@/pages/About";
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <PageLayout>
    <About />
  </PageLayout>
);
