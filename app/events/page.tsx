export const metadata = {
  title: "Veloce NxtGen",
  description: "At Veloce Nxtgen, we empower businesses and brands through cutting-edge digital solutions, unforgettable events, and captivating media content. Our mission is simple: To help you innovate, engage, and inspire in today’s fast-paced world.",
};

import PageIllustration from "@/components/events/page-illustration";
import Hero from "@/components/events/hero-home";
import Workflows from "@/components/events/workflows";
import Features from "@/components/events/features";
import Testimonials from "@/components/events/testimonials";
import Cta from "@/components/events/cta";

export default function Events() {
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