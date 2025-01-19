export const metadata = {
  title: "Veloce NxtGen",
  description: "Welcome to Veloce Infotech—where ideas transform into impactful digital solutions. As a youth-led team passionate about technology, design, and innovation, we specialize in turning visions into reality through our expertise in Web Development, App Development, IoT Solutions, Creative Design, and Digital Marketing.",
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