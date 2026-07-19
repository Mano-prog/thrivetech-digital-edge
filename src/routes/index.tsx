import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp";
import { Hero } from "@/components/site/hero";
import { DetailProvider } from "@/components/site/detail-modal";
import {
  About, Vision, Mission, CoreValues, WhyChoose, Industries, Services,
  WebsiteTypes, SoftwareTypes, TechnologyStack, Process, Methodology,
  EnterpriseFeatures, Excellence, Testimonials, FAQ, Contact,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thrive Tech — Building Intelligent Digital Solutions" },
      {
        name: "description",
        content:
          "Thrive Tech is an enterprise technology partner delivering custom software, cloud, AI, ERP, CRM and digital solutions engineered for scale, security and long-term growth.",
      },
      { property: "og:title", content: "Thrive Tech — Building Intelligent Digital Solutions" },
      { property: "og:description", content: "Enterprise software, cloud and AI solutions engineered for scale, security and long-term growth." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Thrive Tech — Building Intelligent Digital Solutions" },
      { name: "twitter:description", content: "Enterprise software, cloud and AI solutions engineered for scale." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Thrive Tech",
          slogan: "Building Intelligent Digital Solutions",
          url: "/",
          telephone: ["+91-80728-54541", "+91-76048-71241"],
          areaServed: "Worldwide",
          description:
            "Thrive Tech is a technology consulting and software engineering company delivering enterprise-grade digital solutions.",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <DetailProvider>
      <div className="relative min-h-screen bg-background text-foreground noise">
        <SiteNav />
        <main>
        <Hero />
        <About />
        <Vision />
        <Mission />
        <CoreValues />
        <WhyChoose />
        <Industries />
        <Services />
        <WebsiteTypes />
        <SoftwareTypes />
        <TechnologyStack />
        <Process />
        <Methodology />
        <EnterpriseFeatures />
        <Excellence />
        <Testimonials />
        <FAQ />
        <Contact />
        </main>
        <SiteFooter />
        <WhatsAppFloat />
      </div>
    </DetailProvider>
  );
}
