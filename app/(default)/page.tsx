export const metadata = {
  title: "Veloce NxtGen",
  description: "At Veloce Nxtgen, we empower businesses and brands through cutting-edge digital solutions, unforgettable events, and captivating media content. Our mission is simple: To help you innovate, engage, and inspire in today's fast-paced world.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}
