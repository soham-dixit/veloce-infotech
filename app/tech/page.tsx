export const metadata = {
  title: "Veloce NxtGen",
  description: "At Veloce Nxtgen, we empower businesses and brands through cutting-edge digital solutions, unforgettable events, and captivating media content. Our mission is simple: To help you innovate, engage, and inspire in today’s fast-paced world.",
};

import PageIllustration from "@/components/tech/page-illustration";
import Hero from "@/components/tech/hero-home";
import Workflows from "@/components/tech/workflows";
import Features from "@/components/tech/features";
import Testimonials from "@/components/tech/testimonials";
import Cta from "@/components/tech/cta";

export default function Tech() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      {/* <Features /> */}
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}