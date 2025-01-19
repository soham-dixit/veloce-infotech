export const metadata = {
  title: "Veloce NxtGen",
  description: "At Veloce Nxtgen, we empower businesses and brands through cutting-edge digital solutions, unforgettable events, and captivating media content. Our mission is simple: To help you innovate, engage, and inspire in today’s fast-paced world.",
};

import PageIllustration from "@/components/media/page-illustration";
import Hero from "@/components/media/hero-home";
import Workflows from "@/components/media/workflows";
import Features from "@/components/media/features";
import Testimonials from "@/components/media/testimonials";
import Cta from "@/components/media/cta";

export default function Media() {
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