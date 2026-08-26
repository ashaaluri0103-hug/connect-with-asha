import { createFileRoute } from "@tanstack/react-router";

import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asha Aluri | Python Developer" },
      {
        name: "description",
        content:
          "Portfolio of Asha Aluri, a Python Developer. Get in touch for opportunities, project ideas, or to connect.",
      },
      {
        property: "og:title",
        content: "Asha Aluri | Python Developer",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Asha Aluri, a Python Developer. Get in touch for opportunities, project ideas, or to connect.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col">
      <ContactSection />
      <Footer />
    </main>
  );
}
