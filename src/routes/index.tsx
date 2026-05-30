import { createFileRoute } from "@tanstack/react-router";
import { DomainLanding } from "@/components/DomainLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RIFTX.AE — Premium Domain for Sale | DomainCart LLC" },
      { name: "description", content: "Own RIFTX.AE — a premium 5-letter .AE domain. Estimated value $5,800. Yours for $1,299. SSL included, 12-hour transfer." },
      { property: "og:title", content: "RIFTX.AE is Available — $1,299" },
      { property: "og:description", content: "Premium .AE domain. Short, memorable, brandable. Secure transfer within 12 hours." },
    ],
  }),
  component: Index,
});

function Index() {
  return <DomainLanding />;
}
